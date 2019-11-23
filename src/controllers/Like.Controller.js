'use strict'

const serviceLike = require('../services/LikeService')

async function liking(req, res) {
    try {
        const post = req.body.post
        const user = req.body.user
        
        const result = await serviceLike.getLikeByUser(user, post)
        
        if (result != null) {
            result.status = !result.status
            await result.save()
            res.status(200).json({message: 'Success', result})    
        }else {
            const like = await serviceLike.createLike({user, post})
            res.status(200).json({message: 'Success', like})
        }
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getLikesByUser(req, res) {
    try {
        const post = req.params.post
        const user = req.user._id
        const result = await serviceLike.getLikeByPost(user, post)
        
        if (result != null && result.status) {
            return res.status(200).json({message: 'Success', liked: true})    
        }else {
            return res.status(200).json({message: 'Success', liked: false})
        }

    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getLikes(req, res) {
    try {
        const user = req.user._id
        const result = await serviceLike.getLikesByUser(user)
        
        if (result != null && result.status) {
            res.status(200).json({message: 'Success', result})    
        }else {
            res.status(200).json({message: 'not found'})
        }

    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    liking,
    getLikesByUser, 
    getLikes
}