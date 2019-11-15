'use strict'

const PersonController = require('../controllers/Person.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/user/
router.post('/checkProfile', PersonController.login)
router.post('/createProfile', PersonController.createPerson)
router.put('/:id', isAuthenticated, PersonController.updatePerson)
router.get('/', isAuthenticated, PersonController.getPeople)
router.get('/:id', isAuthenticated, PersonController.getPerson)
router.delete('/:id', isAuthenticated, PersonController.deletePerson)

module.exports = router