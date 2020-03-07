const mongoose = require('mongoose')
const roomsSchema = new mongoose.Schema({
    description: {
        type: String,
        default: 'none'
    },
    roomOpen:{
        type:Boolean,
        default:true
        
    },
    roomType: {
        type: String,
        default: 'Double Bedroom'
    }
})

const hotelSchema = new mongoose.Schema({
    hotelName:{
        required:true,
        type:String,
        
    },
    city:{
        required:true,
        type:String
    },
    state: {
        required: true,
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
    numberOfRooms: {
        type: Number,
        required: true
    },
    rooms: [roomsSchema]
})






module.exports = mongoose.model('Hotels', hotelSchema)




