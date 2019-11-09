'use strict'

const AuthController = require('../controllers/Auth.Controller')
const TestController = require('../controllers/Test.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/auth/
// router.post('/login', AuthController.login)
// router.post('/register', AuthController.register)

// router.get('/unprotected', TestController.unprotected)
// router.get('/protected', isAuthenticated, TestController.protected)

module.exports = router