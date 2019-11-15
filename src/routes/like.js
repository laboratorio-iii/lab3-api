'use strict'

const LikeController = require('../controllers/Like.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/like/
router.get('/:post', isAuthenticated, LikeController.liking)

module.exports = router