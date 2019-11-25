'use strict'

const RoleController = require('../controllers/Role.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/role/
router.post('/', isAuthenticated, RoleController.createRole)
router.get('/', isAuthenticated, RoleController.getRoles)
router.get('/:id', isAuthenticated, RoleController.getRole)

module.exports = router