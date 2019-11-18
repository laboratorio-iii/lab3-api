'use strict'

const CommentController = require('../controllers/Comment.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/user/
router.post('/', isAuthenticated, CommentController.createComment)
router.put('/:id', isAuthenticated, CommentController.updateComment)
router.get('/', isAuthenticated, CommentController.getComments)
router.get('/:id', isAuthenticated, CommentController.getComment)
router.delete('/:id', isAuthenticated, CommentController.deleteComment)

module.exports = router