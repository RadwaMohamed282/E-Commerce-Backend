const mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name_en: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name_ar: {
        type: String,
        // required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
        // required: true
    }
}, { timestamps: true })

const CategoryModel = mongoose.model('category', CategorySchema)
module.exports = CategoryModel