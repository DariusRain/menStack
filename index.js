const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 3000;
const hotels = require("./routes/api/hotels")
const keys = require("./config/keys");
const routes = require('./routes/api/hotelrooms');


const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//initialize routes
app.use('/api/hotels/rooms/', routes);



mongoose
  .connect(keys.mongoUri,  { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

  app.use('/api/hotels/', hotels);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
