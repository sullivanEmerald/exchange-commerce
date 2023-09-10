const mongoose =  require('mongoose')

const productSchema =  new mongoose.Schema({
    productName : {
        type : String,
        required  : true,
    },

    productDescription : {
        type : String,
        required  : true,
    },

    productPrice : {
        type : Number,
        required  : true,
    },

    productImage : {
        type : String,
        required  : true,
    },

    cloudinaryId : {
        type : String,
        required  : true,
    },

    productCategory: {
        type : String,
        required  : true,
    }, 

    productAvailable: {
        type : Boolean,
        required  : true,
    }, 

    likes  : {
        type : Number,
        required : true
    },

})

module.exports = mongoose.model('Item', productSchema)