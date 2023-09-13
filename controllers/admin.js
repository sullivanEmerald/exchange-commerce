const cloudinary  =  require('../middleware/cloudinary')
const products =  require('../model/items')
module.exports = {
    createProduct : async (req, res) => {
        console.log(req.file)
        const {name, description, price, category} =  req.body
        try {

            const result = await cloudinary.uploader.upload(req.file.path)

            const saveProduct = products.create({
                name : name,
                description : description,
                price : price,
                category : category,
                image : result.secure_url,
                cloudinaryId : result.public_id,
            }) 

            if(saveProduct) {
                res.status(200).json({ msg : 'Product created successfully', status :  200})
            }
            res.json(500).json({ error: 'internal server error'})

        } catch (error) {
            console.error(error)
        }
    }
}