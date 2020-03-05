const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const DB_CONNECTION = process.env.DB_CONNECTION;
const PORT = process.env.PORT;
const enviroment =  process.env.NODE_ENV || "Production"
const path = require('path')
enviroment.toLowerCase()


app.use(express.json());

// Adding cors
app.use(cors())


// Setting view engine to pug
app.set("view engine", "pug")

app.set("views", path.join("views"))

app.get('/', (req, res) => {
  res.status(200).render('dr-index.pug')
  
})


mongoose
  .connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { 
    if (enviroment === "development") console.log(`Enviroment: ${enviroment} \nDatabase: ${DB_CONNECTION}`)
    else console.log("DB Connection Established")
    
})
  .catch(error => console.log("DB Connection error", error));
  
  app.use(express.static("public"));


app.listen(PORT, () => { 
if(enviroment === "development") console.log(`Server is listening on port ${PORT}...`)
else console.log("Server is listening...")
});
