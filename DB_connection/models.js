const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    price:String,
    imgName:String
});
const Products = mongoose.model('products', userSchema);

module.exports = Products;