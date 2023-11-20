const express =  require('express')
const router =  express.Router()
const OrderController = require('../controllers/orders')


router.get('/', OrderController.fetchAllOrders)
router.post('/add/:id', OrderController.AddUserItem)

module.exports =  router