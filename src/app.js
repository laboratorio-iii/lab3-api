'use strict'

require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')

const port = require('./config/setup').port
const api_base = require('./config/setup').api_base


// Importing Middlewares
const customMdw = require('./middlewares/custom')

// Importing Routes
const authRoutes = require('./routes/auth')

// Initialization
const app = express()
require('./config/passport')

// Settings
app.set('port', port || 5000)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(json())
app.use(passport.initialize())

// Routes
app.use(api_base+'/auth', authRoutes)

app.use(customMdw.errorHandler)
app.use(customMdw.notFoundHandler)

module.exports = app