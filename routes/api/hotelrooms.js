const express = require('express');
const router = express.Router();
const hotelRooms = require("../models/hotelrooms");

//GET all hotel rooms
router.get('/api/hotelrooms',function(req,res){
    res.send({type:'GET'});
});



//ADD new hotel rooms to database
router.post('/api/hotelrooms',function(req,res){
    res.send({type:'POST'});
});


//UPDATE hotel rooms
router.put('/api/hotelroom/:id',function(req,res){
    res.send({type:'PUT'});
});

//DELETE hotel rooms
router.delete('/api/hotelroom/:id',function(req,res){
    res.send({type:'DELETE'});
});



    module.exports = router;