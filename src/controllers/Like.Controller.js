'use strict'

const serviceLike = require('../services/LikeService')

async function liking(req, res) {
    try {
        const post = req.params.post
        const user = 'hermes@gmail.com'
        // const user = req.user
        const result = await serviceLike.getLikeByUser(user, post)
        
        if (result) {
            !result.status
            res.status(200).json({message: 'Success'}, result)    
        }
        const like = await serviceLike.createLike(user, post)
        res.status(200).json({message: 'Success'}, like)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    liking
}