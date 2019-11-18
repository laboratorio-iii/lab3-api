'use strict'

const serviceCity = require('../services/CityService')

async function createCity(req, res) {
    try {
        const data = req.body
        const city = await serviceCity.createCity(data)
        res.status(200).json({message: 'Success', city})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getCity(req, res) {
    try {
        const { id } = req.params.id
        const comment = await serviceCity.getCityById(id)
        res.status(200).json({message: 'Success', comment})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getCities(req, res) {
    try {
        const cities = await serviceCity.getAllCities()
        res.status(200).json({message: 'Success', cities})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getCitiesByState(req, res) {
    try {
        const state = req.params.state
        console.log(state)
        const cities = await serviceCity.getCitiesByState(state)
        res.status(200).json({message: 'Success', cities})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateCity(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const city = await serviceCity.updateCity(id, data)
        res.status(200).json({message: 'Success', city})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteCity(req, res) {
    try {
        const { id } = req.params.id
        const city = await serviceCity.deleteCityById(id)
        res.status(200).json({message: 'Success', city})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    createCity,
    getCity,
    getCities,
    getCitiesByState,
    updateCity,
    deleteCity
}