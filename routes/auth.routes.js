const bcrypt = require('bcryptjs');
const momgoose = require(mongoose);
const saltRounds = 10;

const User = require('../models/User.model');

const router = require('express').Router();

router.get('/signup', isLoggedOut, (req, res, next) => {
    res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
    const {username, password} = req.body;


})






module.exports = router;
