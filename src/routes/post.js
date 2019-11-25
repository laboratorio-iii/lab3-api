'use strict'

const PostController = require('../controllers/Post.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/post/
router.get('/', isAuthenticated, PostController.getPosts)
router.post('/', isAuthenticated, PostController.createPost)
router.get('/user/:user', isAuthenticated, PostController.getPostsByUser)
router.post('/search', isAuthenticated, PostController.getPostsBySearch)
router.post('/search/category', isAuthenticated, PostController.getPostsBySearchByCategory)
router.delete('/:id', isAuthenticated, PostController.deletePost)

module.exports = router