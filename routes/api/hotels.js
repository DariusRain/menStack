const express = require('express');
const router = express.Router();

const Hotel = require('../../models/Hotel');
const isEmpty = require("is-empty");
const hotelRooms = require('../api/hotelrooms');
//Get All Hotels






// router.use('/:id/rooms', hotelRooms)
router.get("/getallhotels", async (req, res) => {
    const hotels = await Hotel.find();
    if (!hotels) return res.status(404).send(`No hotels found`);
    res.send(hotels);
});





// //Get One Hotel
// router.get("/:hotelName", async (req, res) => {
//     const hotelName = req.params.hotelName;
//     //const errors = {};
//     console.log('here')
//     const aHotel = await Hotel.find({ hotelName: hotelName });
//     if (isEmpty(aHotel)) {
//         return res.status(404).json("This hotel could not be found.");
//     };
//     res.send(aHotel);
// });








//Create Hotel  POST
router.post("/", async (req, res) => {
    const { hotelName, city, phoneNumber, state, street, numberOfRooms, rooms} = req.body;

    if (!hotelName || !city || !state || !street || !phoneNumber || !numberOfRooms) {
        return res.status(400).send("Input field is missing");
    }
  
    let newHotel = new Hotel({
        hotelName,
        city,
        state,
        street,
        phoneNumber,
        numberOfRooms,
        rooms: rooms
    });

    newHotel = await newHotel.save();
    res.json({url:`/hotels/profile/${newHotel._id}`});
});



router.get('/profile/:id', async (req, res) => {
    try {
    const getHotel = await Hotel.findById(req.params.id);
    const { hotelName, city, state, street, phoneNumber, numberOfRooms, rooms } = getHotel
    res.status(200).render('hotel', {
        data : {
            hotelName,
            city,
            state,
            street,
            phoneNumber,
            numberOfRooms,
            rooms 
        }
    })

} catch {
    res.status(404).redirect('../')
}

})


router.get('/profile/:id/data', async (req, res) => {
    try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel)
    

} catch {
    res.status(404).redirect('../')
}

})
//Update Hotel 
router.put('/:id', async (req, res) => {
    const updatedhotel = await Hotel.findByIdAndUpdate(req.params.id, {
        hotelName: req.body.hotelName,
        city: req.body.city,
        state: req.body.state,
        street: req.body.street,
        phoneNumber: req.body.phoneNumber
    }, { new: true });

    if (!updatedhotel) return res.status(404).send(`No hotel found with that ID`);

    res.json(updatedhotel);


});





// DELETE Hotel
router.delete("/:id", async (req, res) => {
    const hotel = await hotel.findByIdAndRemove(req.params.id);
    if (!hotel) return res.status(404).send(`No hotel found`);
    res.json(hotel);
})


module.exports = router;
