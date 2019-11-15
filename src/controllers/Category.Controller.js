'use strict'

const serviceCategory = require('../services/CategoryService')

async function createCategory(req, res) {
    try {
        const data = req.body
        // data.user = req.user
        const post = await servicePost.createCategory()
        res.status(200).json({message: 'Success'}, post)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getCategory(req, res) {
    try {
        const { id } = req.params.id
        const category = await serviceCategory.getCategoryById(id)
        res.status(200).json({message: 'Success'}, category)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getCategories(req, res) {
    try {
        const categories = await serviceCategory.getAllCategories()
        res.status(200).json({message: 'Success'}, categories)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateCategory(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const category = await serviceCategory.updateCategory(id, data)
        res.status(200).json({message: 'Success'}, category)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteCategory(req, res) {
    try {
        const { id } = req.params.id
        const category = await serviceCategory.deleteCategoryById(id)
        res.status(200).json({message: 'Success'}, category)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory
}