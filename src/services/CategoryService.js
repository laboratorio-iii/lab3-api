'use strict'

const Category = require('../db/models/Category')

async function createCategory(data) {
    const category = new Category(data)
    await category.save()
    return category
}

async function updateCategory(id, data) {
    const category = await Category.updateOne({_id: id, data})
    return category
}

async function getCategoryById(id) {
    const category = await Category.findById(id)
    return category
}

async function getAllCategories() {
    const categories = await Category.find()
    return categories
}

async function deleteCategoryById(id) {
    const category = await Category.remove({_id: id})
    return category
}

module.exports = {
    createCategory,
    updateCategory,
    getCategoryById,
    getAllCategories,
    deleteCategoryById
  }