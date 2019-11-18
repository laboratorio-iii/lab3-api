'use strict'

const StateController = require('../controllers/State.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/state/
router.post('/', isAuthenticated, StateController.createState)
router.put('/:id', isAuthenticated, StateController.updateState)
router.get('/', StateController.getStates)
router.get('/:id', StateController.getState)
router.delete('/:id', isAuthenticated, StateController.deleteState)

module.exports = router