'use strict'

const Router = require('express')

const isAuthenticated = require('../middlewares/auth').isAuthenticated

const AuthController = require('../controllers/Auth.Controller')
const TestController = require('../controllers/Test.Controller')

const router = Router()

// api/auth/
router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

router.get('/unprotected', TestController.unprotected)
router.get('/protected', isAuthenticated, TestController.protected)

module.exports = router