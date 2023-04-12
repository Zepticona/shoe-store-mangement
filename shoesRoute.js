const express = require('express');
const ShoeController = require('./shoesController');
const multer = require('multer');

const upload = multer();

const router = express.Router();

router
    .route('/')    
    .post(upload.none(), ShoeController.createShoe)

router
    .route('/:id/:price/:size')
    .patch(ShoeController.sellShoe)



module.exports = router;