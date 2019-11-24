'use strict'

const serviceRole = require('../services/RoleService')

async function createRole(req, res) {
    try {
        const data = req.body
        const role = await serviceRole.createRole(data)
        res.status(200).json({message: 'Success', role})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getRole(req, res) {
    try {
        const { id } = req.params.id
        const role = await serviceRole.getRoleById(id)
        res.status(200).json({message: 'Success', role})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getRoles(req, res) {
    try {
        const roles = await serviceRole.getAllRoles()
        res.status(200).json({message: 'Success', roles})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

module.exports = {
    createRole,
    getRoles,
    getRole
}