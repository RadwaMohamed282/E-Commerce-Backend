const express = require('express');
const router = express.Router({ mergeParams: true });

const { GetAllProduct, CreateNewProduct, GetProductByID, DeleteProductById } = require('../controller/product');

// Get All Products
router.get('/', async (req, res, next) => {
    try {
        let allproduct = await GetAllProduct();
        console.log(allproduct);
        console.log(req.params.categoryId, "Productid");
        if (req.params.categoryId) {
            var resData = allproduct.filter(ele => ele.categoryID == req.params.categoryId)
            res.status(201).json(resData)
        } else {

            res.status(201).json(allproduct)
        }
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

// Insert New Category
router.post('/', async (req, res, next) => {
    var insertProduct = req.body;
    // console.log(insertProduct);
    try {
        var insertData = await CreateNewProduct(insertProduct);
        // console.log(insertData);
        res.status(201).json(insertData)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
});

// Return with id
router.get('/:id', async (req, res, next) => {
    var { id } = req.params;
    try {
        var product_id = await GetProductByID(id)
        res.status(201).json(product_id)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    try {
        var deleteProduct = await DeleteProductById(id);
        res.status(201).json(deleteProduct);
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})


module.exports = router;