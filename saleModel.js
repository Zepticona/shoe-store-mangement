const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'A sale must have a brand'],
        trim: true
    },
    articleNo: {
        type: Number,
        required: [true, 'A sale must have an article'],
    },
    size: {
        type: String,
        required: [true, 'A sale must have a size']
    },
    sellingPrice: {
        type: Number,
        required: [true, 'A sale must have a sellingPrice']
    },
    sellingDate: Date
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;