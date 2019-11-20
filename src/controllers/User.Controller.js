'use strict'

const serviceUser = require('../services/UserService')
const servicePerson = require('../services/PersonService')

async function getUser(req, res) {
    try {
        const { id } = req.params.id
        const user = await serviceUser.getUserById(id)
        res.status(200).json({message: 'Success', user})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getUsers(req, res) {
    try {
        const users = await serviceUser.getAllUsers()
        res.status(200).json({message: 'Success', users})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const user = await serviceUser.updateUser(id, data)
        res.status(200).json({message: 'Success', user})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params.id
        const user = await serviceUser.deleteUserById(id)
        res.status(200).json({message: 'Success', user})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getUsersBySearch(req, res) {
    try {
        const input  = req.body.input
        const cities  = req.body.cities

        if(cities == ''){
            const users = await serviceUser.filterUser(input)
            // console.log(users)
            res.status(200).json({message: 'Success', users})
        }else{
            cities.forEach(async element => {
                const person = await servicePerson.getPersonByCity(element)
                console.log(person)
            });
            // res.status(200).json({message: 'Success', person})
        }
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    getUsersBySearch
}