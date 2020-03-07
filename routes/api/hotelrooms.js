const express = require('express');
const router = express.Router();
const Hotel = require("../../models/Hotel");

//GET all hotel rooms

router.get('/',function(req,res){
    res.send({type:'GET'});
});



//ADD new hotel rooms to database
router.post('/',function(req,res){
    res.send({type:'POST'});
});


//UPDATE hotel rooms
router.put('/:id',function(req,res){
    res.send({type:'PUT'});
});

//DELETE hotel rooms
router.delete('/:id',function(req,res){
    res.send({type:'DELETE'});
});



    module.exports = router;