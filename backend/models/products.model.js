const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const productSchema= new Schema({
    productname: {type: String, required: true},
    productbrand: {type: String, required: true},
    productprice: {type: Number, required: true},
    productsize: {type: Number,required: true},
    productcode: {type:String, required: true},
    isresold: {type:Boolean, required: true},
    hash: {type:String, required: true}
}, {
    timestamps: true,
});

const Product =  mongoose.model('Product', productSchema);

module.exports = Product;