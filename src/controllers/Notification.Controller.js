'use strict'

const serviceNotification = require('../services/NotificationService')

async function getNotifications(req, res) {
    try {
        const user = 'hermes@gmail.com'
        // const user = req.user
        const notifications = await serviceNotification.getNotifications(user)
        
        res.status(200).json({message: 'Success'}, notifications)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    getNotifications
}