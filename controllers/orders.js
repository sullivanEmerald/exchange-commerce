const products = require('../model/items')
const orders =  require('../model/orders')


module.exports = {
    AddUserItem : async (req, res) => {
        try {
            const {id} =  req.params
            const element = await products.findById(id)

            // destrucuturing the product to create user order
            const {_id, name, description, price, image } = element
            
            // Creating the user order in the database after destructing 
            const addingToCart =  await orders.create({
                productId : _id,
                productName : name,
                productDescription : description,
                productPrice :  price,
                productImage : image,
                userId : req.user.id,
                qty : 1
            })

            if(!addingToCart){
                res.status(500).json({ error : 'Internal Network error'})
            }

            res.status(200).json({ msg : 'Item added successfully'})
        } catch (error) {
            console.error(error)
        }
    }
}