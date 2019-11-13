'use strict'

const PostController = require('../controllers/Post.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/post/
router.post('/', isAuthenticated, PostController.createPost)
router.get('/', isAuthenticated, PostController.getPosts)
router.get('/:id', isAuthenticated, PostController.getPost)
router.get('/:category', isAuthenticated, PostController.getPostsByCategory)
router.delete('/:id', isAuthenticated, PostController.deletePost)

module.exports = router