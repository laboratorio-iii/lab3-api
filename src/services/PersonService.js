'use strict'

const Person = require('../db/models/Person')

async function createPerson(data) {
    const person = new Person(data)
    await person.save()
    return person
}

async function updatePerson(id, data) {
    const person = await Person.updateOne({_id: id, data})
    return person
}

async function getPersonById(id) {
    const person = await Person.findById(id)
    return person
}

async function getPersonByUser(user) {
    const person = await Person.findOne({user})
    return person
}

async function getAllPeople() {
    const people = await Person.find()
    return people
}

async function deletePersonById(id) {
    const person = await Person.remove({_id: id})
    return person
}

module.exports = {
    createPerson,
    updatePerson,
    getPersonById,
    getPersonByUser,
    getAllPeople,
    deletePersonById
  }