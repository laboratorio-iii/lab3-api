'use strict'

require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')

const { port, api_base } = require('./config/setup')

// Importing Middlewares
const customMdw = require('./middlewares/custom')

// Importing Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const personRoutes = require('./routes/person')
const categoryRoutes = require('./routes/category')
const stateRoutes = require('./routes/state')
const cityRoutes = require('./routes/city')
const commentRoutes = require('./routes/comment')

// Initialization
const app = express()
require('./lib/passport')

// Settings
app.set('port', port || 5000)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())

// Routes
app.use(api_base+'/auth', authRoutes)
app.use(api_base+'/user', userRoutes)
app.use(api_base+'/category', categoryRoutes)
app.use(api_base+'/comment', commentRoutes)
app.use(api_base+'/person', personRoutes)
app.use(api_base+'/state', stateRoutes)
app.use(api_base+'/city', cityRoutes)

app.use(customMdw.errorHandler)
app.use(customMdw.notFoundHandler)

module.exports = app