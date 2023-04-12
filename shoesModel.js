const mongoose = require('mongoose');
const shoeSizeSchema = mongoose.Schema({
    size: {
        type: String,
        required: [true, 'A shoe must have a size'],
        trim: true
    },
    pcs: {
        type: Number,
        required: [true, 'A shoe must have a number'],
    }
})

const shoeSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'A shoe must have a brand'],
        trim: true
    },
    articleNo: {
        type: Number,
        required: [true, 'A shoe must have an article'],
    },
    sizes: [shoeSizeSchema],
    basePrice: {
        type: Number,
        required: [true, 'A shoe must have a baseprice']
    },
    buyingDate: Date
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;