'use strict'

const Notification = require('../db/models/Notification')

async function createNotification(data) {
    const notification = new Notification(data)
    await notification.save()
    return notification
}

async function getNotifications(user) {
    const notifications = await Notification.find(user)
    return notifications
}

module.exports = {
    createNotification,
    getNotifications
  }