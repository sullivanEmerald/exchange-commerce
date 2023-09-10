const express =  require('express')
const router =  express.Router()
const authController = require('../controllers/auth')
const passport = require('passport');
require('../config/passport')(passport);

router.post('/register', authController.postSignup)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), authController.postLogin)

module.exports = router