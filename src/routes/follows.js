'use strict'

const FollowsController = require('../controllers/Follows.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/follows/
router.post('/', isAuthenticated, FollowsController.following)
router.get('/follower/:followed', isAuthenticated, FollowsController.getFollower)
router.get('/followers/:followed', isAuthenticated, FollowsController.getFollowers)
router.get('/followeds/:follower', isAuthenticated, FollowsController.getFolloweds)

module.exports = router