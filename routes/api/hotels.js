const express = require('express');
const router = express.Router();
const Hotels = require("../models/hotels");

//GET all hotels
router.get('/api/hotels')