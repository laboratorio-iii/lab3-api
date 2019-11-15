'use strict'

const State = require('../db/models/State')

async function createState(data) {
    const state = new State(data)
    await state.save()
    return state
}

async function updateState(id, data) {
    const state = await State.updateOne({_id: id, data})
    return state
}

async function getStateById(id) {
    const state = await State.findById(id)
    return state
}

async function getAllStates() {
    const states = await State.find()
    return states
}

async function deleteStateById(id) {
    const state = await State.remove({_id: id})
    return state
}

module.exports = {
    createState,
    updateState,
    getStateById,
    getAllStates,
    deleteStateById
  }