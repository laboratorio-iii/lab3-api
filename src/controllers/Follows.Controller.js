'use strict'

const serviceFollows = require('../services/FollowsService')

async function following(req, res) {
    try {
        const followed = req.params.followed
        // const follower = req.user
        const result = await serviceFollows.getFollowedById(followed)
        
        if (result) {
            !result.status
            res.status(200).json({message: 'Success'}, result)    
        }
        const follows = await serviceFollows.createFollows({followed, /*follower*/})
        res.status(200).json({message: 'Success'}, follows)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    following
}