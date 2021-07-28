const express = require('express');
const user = require('../models/usermodel');
const router = express.Router();

router.post('/signup', async (req, res) => {
    let {
        firstname,
        lastname,
        email,
        password
    } = req.body;

    const checkEmail = await user.findOne({
        email
    });
    if (checkEmail) {
        return res.json({
            status: 'failed',
            message: 'email already exixt'
        })
    }
    const newUser = {
        firstname,
        lastname,
        email,
        password
    };

    const createUser = await user.create(newUser);
    res.status(201).json({
        status: 'sucess',
        data: {
            id: createUser._id,
            firstname: createUser.firstname,
            lastname: createUser.lastname,
            email: createUser.email,
        }
    })
})
module.exports = router;