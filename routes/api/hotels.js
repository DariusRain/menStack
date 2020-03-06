const express = require('express');
const router = express.Router();

const hotel = require('../../Models/Hotel');
const isEmpty = require("is-empty");

//Get All Hotels
router.get("/getallhotels", async (req, res) => {
    const hotels = await hotel.find();
    if (!hotels) return res.status(404).send(`No hotels found`);
    res.send(hotels);
});

//Get One Hotel
router.get("/:hotelName", async (req, res) => {
    const hotelName = req.params.hotelName;
    //const errors = {};
    const aHotel = await Hotel.find({ hotelName: hotelName });
    if (isEmpty(aHotel)) {
        return res.status(404).json("This hotel could not be found.");
    };
    res.send(aHotel);
});
//Create Hotel  POST
router.post("/", async (req, res) => {
    const { hotelName, city, phoneNumber } = req.body;

    if (!hotelName || !city || !state || !street || !phoneNumber) {
        return res.status(400).send("Input field is missing");
    }

    let newHotel = new Hotel({
        hotelName,
        city,
        state,
        street,
        phoneNumber
    });

    newHotel = await newHotel.save();
    res.json(newHotel);
});

//Update Hotel 
router.put('/:id', async (req, res) => {
    const updatedhotel = await hotel.findByIdAndUpdate(req.params.id, {
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
