'use strict'

const StateController = require('../controllers/State.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/user/
router.post('/registerState', isAuthenticated, StateController.createState)
router.put('/:id', isAuthenticated, StateController.updateState)
router.get('/', isAuthenticated, StateController.getStates)
router.get('/:id', isAuthenticated, StateController.getState)
router.delete('/:id', isAuthenticated, StateController.deleteState)

module.exports = router