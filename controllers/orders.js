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
                return res.status(500).json({ error : 'Internal Network error'})
            }

            // fetching all orders to get the kast utem 
            const allOrders = await orders.find().lean()

            // fetching the last item added 
            const newAddedItem = allOrders[allOrders.length - 1]
        
             return res.status(200).json({ msg : 'Item added successfully', item : newAddedItem})
        } catch (error) {
            console.error(error)
        }
    },


    fetchAllOrders: async (req, res) => {
        try {
            const allOrders = await orders.find().lean();
    
            if (!allOrders.length) {
                return res.status(500).json({ error: 'Network error. Check your network' });
            }
    
            return res.status(200).json({ data: allOrders, msg: 'Orders successfully retrieved' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    
}