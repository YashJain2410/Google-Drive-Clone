const express = require('express')
const router = express.Router();
const upload = require('../config/multer.config.js')
const fileModel = require('../models/files.model.js')
const authMiddleware = require('../middlewares/auth.js');

router.get('/home', authMiddleware, (req, res) => {
    res.render('home');
})

router.post('/upload', authMiddleware , upload.single('file'), async (req, res) => {
    const newFile = await fileModel.create({
        path: req.file.path,
        originalname: req.file.originalname,
        user: req.user.userId
    })
    res.json(newFile)
})

module.exports = router;