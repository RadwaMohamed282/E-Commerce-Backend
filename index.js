const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var app = express();
var PORT = 3333;

// Routes 
const CategoryRouter = require('./routes/category');
const SubCategoryRouter = require('./routes/subCategory');
const ProductRouter = require('./routes/product');


mongoose.connect("mongodb://127.0.0.1:27017/ECommerce")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });


// middleware
app.use(cors());
app.use(express.json());

app.use('/categorys', CategoryRouter);
app.use('/subCategorys', SubCategoryRouter);
app.use('/products', ProductRouter);

// handeling Error
app.use("*", (req, res, next) => {
    res.status(404).json({ massage: "unavilable route" })
})

app.use((err, req, res, next) => {
    res.status(404).json({ massage: "Error" })
})


// 1
app.listen(PORT, () => {
    console.log("Connected Successfully");
});

module.exports = app