const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.config.js");

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads", // Cloudinary folder
        format: async (req, file) => "png", // Convert to PNG
        public_id: (req, file) => file.originalname,
    },
});

const upload = multer({ storage });

module.exports = upload;


// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./public/temp");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage });

// module.exports = upload;