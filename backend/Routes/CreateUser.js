const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/createuser', async (req, res) => {
    try{
        await User.create({
            name: "Ameer Hamza Khan",
            email: "admin@gmail.com",
            password: "123123",
            location: "madina colony"
        })
        res.json({success: true});
    } catch(error){
        console.log(error);
        res.json({success: false});
    }
})

module.exports = router;