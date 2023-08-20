const ProductModel = require('../models/product');

function GetAllProduct() {
    return ProductModel.find();
}

function CreateNewProduct(productData) {
    return ProductModel.create(productData);
}
function GetProductByID(id) {
    return ProductModel.findById(id);
}
function DeleteProductById(id){
    return ProductModel.deleteOne({ _id: id });
}

module.exports = { GetAllProduct, CreateNewProduct, GetProductByID ,DeleteProductById}