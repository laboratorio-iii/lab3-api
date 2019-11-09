'use strict'

const serviceUser = require('../services/UserService')

async function getUser(req, res) {
    try {
        const { id } = req.params.id
        const user = await serviceUser.getUserById(id)
        res.status(200).json({message: 'Success'}, user)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getUsers(req, res) {
    try {
        const users = await serviceUser.getAllUsers()
        res.status(200).json({message: 'Success'}, users)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const user = await serviceUser.updateUser(id, data)
        res.status(200).json({message: 'Success'}, user)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params.d
        const user = await serviceUser.deleteUserById(id)
        res.status(200).json({message: 'Success'}, user)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser
}