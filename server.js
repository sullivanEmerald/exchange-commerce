const express = require('express')
const app =  express()
const logger =  require('morgan')
const cors = require('cors')
const connectDB =  require('./config/database')
const passport = require('passport')
const session =  require('express-session')
const MongoStore =  require('connect-mongo')

// ROUTES
const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')
const productRoutes =  require('./routes/product')

// connecting with my environment variables
require('dotenv').config({ path: './config/.env'})

require('./config/passport')(passport)

// Connecting database
connectDB()

// app setting
app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// initializing session
app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : false,
    store : MongoStore.create({
        mongoUrl : process.env.DB_STRING
    })
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', mainRoutes)
app.use('/admin', adminRoutes)
app.use('/product', productRoutes)



app.listen(process.env.PORT, () => {
    console.log(`app is running on ${process.env.PORT}`)
})