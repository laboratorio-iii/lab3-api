'use strict'

const Category_FollowsController = require('../controllers/Category_Follows.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/category_follows/
router.post('/', isAuthenticated, Category_FollowsController.following)
router.get('/follower/:followed', isAuthenticated, Category_FollowsController.getFollower)
router.get('/followeds/:follower', isAuthenticated, Category_FollowsController.getCategoriesFolloweds)

module.exports = router