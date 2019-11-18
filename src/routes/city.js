'use strict'

const CityController = require('../controllers/City.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/city/
// router.post('/', isAuthenticated, CityController.createCity)
router.put('/:id', isAuthenticated, CityController.updateCity)
router.get('/:state', CityController.getCitiesByState)
// router.get('/:id', CityController.getCity)
router.delete('/:id', isAuthenticated, CityController.deleteCity)

module.exports = router