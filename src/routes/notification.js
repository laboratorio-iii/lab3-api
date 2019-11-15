'use strict'

const NotificationController = require('../controllers/Notification.Controller')

const { isAuthenticated } = require('../middlewares/auth')

const express = require('express')
const router = express.Router()

// api/notifications/
router.get('/', isAuthenticated, NotificationController.getNotifications)

module.exports = router