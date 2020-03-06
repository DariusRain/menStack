const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        
    },
    city:{
        required:true,
        type:String
    },
    street:{
        required:true,
        type:String
    },
    phoneNumber:{
        required:true,
        type:String,
        maxLength:15
    },
    rooms: [roomsSchema]
})

const roomsSchema = new mongoose.Schema({
    roomSize:{
       
        required:true,
        type:String 
    },
    roomOpen:{
        available:Boolean,
        default:true
        
    },
})





module.exports = mongoose.model('Hotels',hotelSchema)




