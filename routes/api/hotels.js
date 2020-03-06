const express = require('express');
const router = express.Router();
const Hotels = require("../models/hotels");

//GET all hotels
router.get('/api/hotels',function(req,res){
    res.send({type:'GET'});
});



//ADD new hotel to database
router.post('/api/hotels',function(req,res){
    res.send({type:'POST'});
});


//UPDATE hotel 
router.put('/api/hotels/:id',function(req,res){
    res.send({type:'PUT'});
});

//DELETE hotel
router.delete('/api/hotels/:id',function(req,res){
    res.send({type:'DELETE'});
});



    module.exports = router;