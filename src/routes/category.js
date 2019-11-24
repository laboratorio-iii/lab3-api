'use strict'

const CategoryController = require('../controllers/Category.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/category/
router.post('/', isAuthenticated, CategoryController.createCategory)
router.put('/:id', isAuthenticated, CategoryController.updateCategory)
router.get('/', isAuthenticated, CategoryController.getCategories)
router.get('/:id', isAuthenticated, CategoryController.getCategory)
router.delete('/:id', isAuthenticated, CategoryController.deleteCategory)

module.exports = router