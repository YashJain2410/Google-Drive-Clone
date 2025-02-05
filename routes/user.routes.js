const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('Register');
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('User Registered');
})

module.exports = router;