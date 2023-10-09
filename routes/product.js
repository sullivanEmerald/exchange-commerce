const express = require('express')
const router =  express.Router()
const productControllers = require('../controllers/products')


router.put('/update/:id', productControllers.updateView)


module.exports = router