const mongoose = require('mongoose'),
    hotelSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            maxlength: 10
        },
        address: {
            type: String,
            required: true
        },
        state: {
            type: String,
            maxlength: 2
        },
        images: {
            type: Array,
            default: 'https://bit.ly/2Ttp7OJ'
        },
        hotelRooms: [roomSchema]

        
    })
    // https://mongoosejs.com/docs/subdocs.html

   const roomSchema = new mongoose.Schema({
       description: {
           type: String,
           maxlength: 500
       },
       availablity: {
           type: Boolean,
           default: true
        },
        images: {
            type: Array,
            default: null
        },
        price: {
            type: String,
            required: true
        }


   }) 