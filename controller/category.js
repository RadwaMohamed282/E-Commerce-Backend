const categoryModel = require('../models/category');

function GetAllCategory() {
    return categoryModel.find();
}

function CreateCategory(categoryData) {
    // return a promise => handel with asyn await
    console.log(categoryData, "Data")
    return categoryModel.create(categoryData);
}

function GetCategoryByID(id) {
    return categoryModel.findById(id);
}

// function UpdateTodo(id, titlebody) {
//     return todoModel.updateOne({ _id: id }, { title: titlebody.title })
// }
function DeleteCategoryById(id) {
    return categoryModel.deleteOne({ _id: id });
}


module.exports = { GetAllCategory, CreateCategory, GetCategoryByID, DeleteCategoryById };