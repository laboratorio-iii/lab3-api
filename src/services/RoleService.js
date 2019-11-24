'use strict'

const Role = require('../db/models/Role')

async function createRole(data) {
    const role = new Role(data)
    await role.save()
    return role
}


async function getRoleById(id) {
    const role = await Role.findById(id)
    return role
}

async function getRoleByName(name) {
    const role = await Role.findOne({name})
    return role
}

async function getAllRoles() {
    const roles = await Role.find()
    return roles
}

module.exports = {
    createRole,
    getRoleById,
    getRoleByName,
    getAllRoles
  }