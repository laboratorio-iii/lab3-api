'use strict'

const LikeController = require('../controllers/Like.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/like/
router.post('/', isAuthenticated, LikeController.liking)
// router.get('/:post', isAuthenticated, LikeController.getLike)
router.get('/user/:post', isAuthenticated, LikeController.getLikesByUser)

module.exports = router