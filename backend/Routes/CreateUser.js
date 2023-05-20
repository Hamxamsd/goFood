const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "weAllarePakistani#andWehaveOurOwnCultures";



router.post('/createuser',
[
  body('email').isEmail().withMessage('Email is invalid'),
  body('name').isLength({ min: 5 }).withMessage('Name character must be minimum 5'),
  body('password').isLength({ min: 5 }).withMessage('Incorrect Password')
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
      location: req.body.location
    })
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
})


router.post("/loginuser", [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }).withMessage('Incorrect Password')],
  async (req, res) => {
  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.json({ errors: errors.array() });
    }
    let email = req.body.email;
  try{
    let userData = await User.findOne({email: email});
    if(!userData){
      return res.status(400).json({errors: "Login with correct credentials"});
    }

    const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

    if(!pwdCompare){
      return res.status(400).json({errors: "Login with correct credentials"});
    }

    const data = {
      user: {
        id: userData.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({success: true, authToken: authToken});
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
})

module.exports = router;
