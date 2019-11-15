'use strict'

const FollowsController = require('../controllers/Follows.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/follows/
router.get('/:followed', isAuthenticated, FollowsController.following)

module.exports = router