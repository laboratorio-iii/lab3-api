'use strict'

const User = require('../db/models/User')

async function createUser(data) {
    const user = new User(data)
    await user.save()
    return user
}

async function updateUser(id, data) {
    await user.updateOne({_id: id, data})
    return user
}

async function getUserById(id) {
    const user = await User.findById(id)
    return user
}

async function getUserByUsername(username) {
    const user = await User.findOne({username})
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

module.exports = {
    createUser,
    updateUser,
    getUserById,
    getUserByUsername,
    getAllUsers,
    deleteUserById
  }