'use strict'

const serviceFollows = require('../services/FollowsService')

async function following(req, res) {
    try {
        const followed = req.body.followed
        const follower = req.body.follower

        const result = await serviceFollows.getFollowed(followed, follower)
        
        if (result != null) {
            result.status = !result.status
            await result.save()

            res.status(200).json({message: 'Success', result})      
        }else {
            const follows = await serviceFollows.createFollows({followed, follower})
            res.status(200).json({message: 'Success', follows})
        }
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getFollower(req, res) {
    try {
        const followed = req.params.followed
        const user = req.user._id
        const result = await serviceFollows.getFollower(user, followed)

        if (result != null && result.status) {
            return res.status(200).json({message: 'Success', followed: true})    
        }else {
            return res.status(200).json({message: 'Success', followed: false})
        }

    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getFollowers(req, res) {
    try {
        const { followed } = req.params
        const followers = await serviceFollows.getFollowers(followed)

        res.status(200).json({message: 'Success', followers})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

module.exports = {
    following,
    getFollower,
    getFollowers
}