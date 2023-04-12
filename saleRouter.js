const express = require('express');
const saleController = require('./saleController');

const router = express.Router();

router
    .route('/')
    .get(saleController.getAllSale)


module.exports = router;

