'use strict'

const serviceState = require('../services/StateService')

async function createState(req, res) {
    try {
        const data = req.body
        const state = await serviceState.createState(data)
        res.status(200).json({message: 'Success', state})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getState(req, res) {
    try {
        const { id } = req.params.id
        const state = await serviceState.getStateById(id)
        res.status(200).json({message: 'Success', state})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getStates(req, res) {
    try {
        const states = await serviceState.getAllStates()
        res.status(200).json({message: 'Success', states})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateState(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const state = await serviceState.updateState(id, data)
        res.status(200).json({message: 'Success', state})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteState(req, res) {
    try {
        const { id } = req.params.id
        const state = await serviceState.deleteStateById(id)
        res.status(200).json({message: 'Success', state})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    createState,
    getState,
    getStates,
    updateState,
    deleteState
}