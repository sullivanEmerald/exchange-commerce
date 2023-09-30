const Products = require('../model/items')

module.exports = {
    fetchAllProducts : async (req, res) => {
        try {
            const product = await Products.find().lean()
            res.status(200).json({ product : product, message : 'Successfully added', status : 200})
        } catch (error) {
            res.status(500).json({ error : 'Networ=k error'})
        }
    }
}