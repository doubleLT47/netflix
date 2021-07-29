
const router = require('express').Router();
const User = require('../models/User')
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken')

//Register new user
router.post('/register', async (req, res) => {
    const newUser = User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })

    try {
        const user = await newUser.save();
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//login 
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong password or username");

        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong password or username"); 

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin}, 
            process.env.SECRET_KEY, 
            { expiresIn: "5d"}
        )

        const {password, ...others} = user._doc;

        res.status(200).json({...others, accessToken})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;