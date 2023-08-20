const express = require('express');
const router = express.Router();

const subCategoryRoute = require('./subCategory');
const productRoute = require('./product');

const { GetAllCategory, CreateCategory, GetCategoryByID, DeleteCategoryById } = require('../controller/category');

// Gett All Categories
router.get('/', async (req, res, next) => {
    try {
        var allcategory = await GetAllCategory();
        // console.log(allcategory);
        res.status(201).json(allcategory)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

// get SubCategory in specific category
router.use('/:categoryId/subcategories', subCategoryRoute);
// get product with specific category
router.use('/:categoryId/products', productRoute);

// Insert New Category
router.post('/', async (req, res, next) => {
    var insertCategory = req.body;
    try {
        var insertData = await CreateCategory(insertCategory);
        console.log(insertData);
        res.status(201).json(insertData)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
});

// Get category by id
router.get("/:id", async (req, res, next) => {
    var { id } = req.params;
    try {
        var category_id = await GetCategoryByID(id)
        res.status(201).json(category_id)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }

});


// Delete Category
router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    try {
        var deletecategory = await DeleteCategoryById(id);
        res.status(201).json(deletecategory);
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

module.exports = router;