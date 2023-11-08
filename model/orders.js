const mongoose =  require('mongoose')

const OrderSchema =  new mongoose.Schema({
    productId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Item",
    },

    productName : {
        type : String,
        required : true,
    },

    productDescription : {
        type : String,
        required : true,
    },


    productPrice : {
        type : Number,
        required : true,
    },

    productImage : {
        type : String,
        required : true,
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },

    qty : {
        type : Number,
        required : true
    },

    status : {
        type : String,
        default : null,
    },

     showAdmin: {
        type : Boolean,
        default :  false,
    },

    saveItem: {
        type : Boolean,
        default : false,
    },

})


module.exports = mongoose.model('Order', OrderSchema)

