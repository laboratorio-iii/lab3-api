'use strict'

const User = require('../db/models/User')
const serviceCity = require('./CityService')

async function createUser(data) {
    const city = await serviceCity.getCityByName(data.city)
    const user = new User(data)
    
    user.city = city._id
    await user.save()
    return user
}

async function updateUser(id, data) {
    const user = await User.updateOne({_id: id, data})
    return user
}

async function getUserById(id) {
    const user = await User.findById(id)
    return user
}

async function getUserByUsername(username) {
    const user = await User.findOne({username}).populate({
            path: 'city',
            populate: {
                path: 'state'
            }
        })
    return user
}

async function getAllUsers() {
    const users = await User.find()
    return users
}

async function deleteUserById(id) {
    const user = await User.remove({_id: id})
    return user
}

async function filterUser(param) {
    const users = await User.find({username: { $regex: '.*' + param + '.*' }}).populate({
        path: 'city',
        populate: {
            path: 'state'
        }
    })
    return users
}

async function filterUserByCity(user, city_name) {
    const city = await serviceCity.getCityByName(city_name)
    const users = await User.find({ $and: [ { username: { $regex: '.*' + user + '.*' } }, { city: city._id } ] }).populate({
        path: 'city',
        populate: {
            path: 'state'
        }
    })
    return users
}

module.exports = {
    createUser,
    updateUser,
    getUserById,
    getUserByUsername,
    getAllUsers,
    deleteUserById,
    filterUser,
    filterUserByCity
  }