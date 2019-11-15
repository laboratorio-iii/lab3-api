'use strict'

const servicePerson = require('../services/PersonService')

async function createPerson(req, res) {
    try {
        const data = req.body
        // data.user = req.user
        const person = await servicePerson.createPerson()
        res.status(200).json({message: 'Success'}, person)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPerson(req, res) {
    try {
        const { id } = req.params.id
        const person = await servicePerson.getPersonById(id)
        res.status(200).json({message: 'Success'}, person)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPeople(req, res) {
    try {
        const people = await servicePerson.getAllPeople()
        res.status(200).json({message: 'Success'}, people)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updatePerson(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const person = await servicePerson.updatePerson(id, data)
        res.status(200).json({message: 'Success'}, person)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deletePerson(req, res) {
    try {
        const { id } = req.params.d
        const person = await servicePerson.deletePersonById(id)
        res.status(200).json({message: 'Success'}, person)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    createPerson,
    getPerson,
    getPeople,
    updatePerson,
    deletePerson
}