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

app.use(customMdw.errorHandler)
app.use(customMdw.notFoundHandler)

module.exports = app