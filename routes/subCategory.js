const express = require('express');
const router = express.Router({ mergeParams: true });
const { GetAllSubCategory, CreateSubCategory, GetSubCategoryByID, DeleteSubCategoryById } = require('../controller/subCategory')


// Gett All subCategories
router.get('/', async (req, res, next) => {
    try {
        let allcategory = await GetAllSubCategory();
        if (req.params.categoryId) {
            var resData = allcategory.filter(ele => ele.category == req.params.categoryId)
            res.status(201).json(resData)
        } else {
            // var allcategory = await GetAllSubCategory();
            res.status(201).json(allcategory)
        }
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

// Insert New Category
router.post('/', async (req, res, next) => {
    var insertCategory = req.body;
    try {
        var insertData = await CreateSubCategory(insertCategory);
        // console.log(insertData);
        res.status(201).json(insertData)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
});

// Get category by id
router.get("/:id", async (req, res, next) => {
    var { id } = req.params;
    try {
        var category_id = await GetSubCategoryByID(id)
        res.status(201).json(category_id)
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }

});


// Delete Category
router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    try {
        var deletecategory = await DeleteSubCategoryById(id);
        res.status(201).json(deletecategory);
    } catch (e) {
        res.status(404).json({ massage: e.massage });
    }
})

module.exports = router;