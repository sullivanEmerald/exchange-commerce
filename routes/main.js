const express =  require('express')
const router =  express.Router()
const authController = require('../controllers/auth')
const productController =  require('../controllers/products')
const passport = require('passport');
require('../config/passport')(passport);

// ROUTES FOR ATHENTICATION AND AUTHORIZATION
router.post('/register', authController.postSignup)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), authController.postLogin)


// ROUTES FOR PRODUCTS
router.get('/products', productController.fetchAllProducts)

module.exports = router