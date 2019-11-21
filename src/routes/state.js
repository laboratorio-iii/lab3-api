'use strict'

const StateController = require('../controllers/State.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/state/
router.post('/', StateController.createState)
router.put('/:id', StateController.updateState)
router.get('/', StateController.getStates)
router.get('/:id', StateController.getState)
router.delete('/:id', StateController.deleteState)

module.exports = router