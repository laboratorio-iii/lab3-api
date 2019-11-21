'use strict'

const UserController = require('../controllers/User.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/user/
router.put('/:id', isAuthenticated, UserController.updateUser)
router.get('/', isAuthenticated, UserController.getUsers)
router.get('/:id', isAuthenticated, UserController.getUser)
router.post('/search', isAuthenticated, UserController.getUsersBySearch)
router.post('/search/city', isAuthenticated, UserController.getUsersBySearchByCity)
router.delete('/:id', isAuthenticated, UserController.deleteUser)

module.exports = router