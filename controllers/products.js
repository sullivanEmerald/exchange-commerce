const Products = require('../model/items')
const Orders =  require('../model/orders')

module.exports = {
    fetchAllProducts : async (req, res) => {
        try {
            const product = await Products.find().lean()
            res.status(200).json({ product : product, message : 'Successfully added', status : 200})
        } catch (error) {
            res.status(500).json({ error : 'Network error'})
        }
    },

    updateView : async (req, res) => {
        const { id } = req.params
        try {
            const updateProduct =  await Products.findByIdAndUpdate(id, {
                $inc : {
                    views : 1
                }
            })
            if(!updateProduct){
                res.status(500).json({ error : 'Internal server error'})
            }
            res.status(200).json({ message : 'view updated'})
           
        } catch (error) {
            console.error(error)
        }
    } ,
}