'use strict'

const City = require('../db/models/City')
const serviceState = require('../services/StateService')

async function createCity(data) {
    const city = new City(data)
    await city.save()
    return city
}

async function updateCity(id, data) {
    const city = await City.updateOne({_id: id, data})
    return city
}

async function getCityById(id) {
    const city = await City.findById(id)
    return city
}

async function getCityByName(name) {
    const city = await City.findOne({name})
    return city
}

async function getCitiesByState(state_name) {
    const state = await serviceState.getStateByName(state_name)
    const cities = await City.findOne({state: state._id})
    return cities
}

async function getAllCities() {
    const cities = await City.find()
    return cities
}

async function deleteCityById(id) {
    const city = await City.remove({_id: id})
    return city
}

module.exports = {
    createCity,
    updateCity,
    getCityById,
    getCityByName,
    getCitiesByState,
    getAllCities,
    deleteCityById
  }