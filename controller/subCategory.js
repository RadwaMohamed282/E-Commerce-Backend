const subCategoryModel = require('../models/subCategory');

function GetAllSubCategory() {
    return subCategoryModel.find();
}

function CreateSubCategory(categoryData) {
    return subCategoryModel.create(categoryData);
}

function GetSubCategoryByID(id) {
    return subCategoryModel.findById(id);
}

function DeleteSubCategoryById(id) {
    return subCategoryModel.deleteOne({ _id: id });
}

module.exports = { GetAllSubCategory, CreateSubCategory, GetSubCategoryByID, DeleteSubCategoryById };