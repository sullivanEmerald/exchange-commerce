const express =  require('express')
const router =  express.Router()
const multerConfig = require('../middleware/multer');
const adminController = require('../controllers/admin')


router.post('/register', multerConfig.single('image'), adminController.createProduct)


module.exports =  router