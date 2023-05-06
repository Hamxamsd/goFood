const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

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

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location
    })
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
})

module.exports = router;
