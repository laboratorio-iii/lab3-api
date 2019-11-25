'use strict'

const serviceCategory_Follows = require('../services/Category_FollowsService')

async function following(req, res) {
    try {
        const category = req.body.category
        const user = req.user._id

        const result = await serviceCategory_Follows.getCategory_Followed(category, user)
        
        if (result != null) {
            result.status = !result.status
            await result.save()

            res.status(200).json({message: 'Success', result})      
        }else {
            const follows = await serviceCategory_Follows.createCategory_Followed({category, user})
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
        const result = await serviceCategory_Follows.getCategory_Followed(followed, user)

        if (result != null && result.status) {
            return res.status(200).json({message: 'Success', followed: true})    
        }else {
            return res.status(200).json({message: 'Success', followed: false})
        }

    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getCategoriesFolloweds(req, res) {
    try {
        const { follower } = req.params
        const followeds = await serviceCategory_Follows.getCategories_Followeds(follower)

        res.status(200).json({message: 'Success', followeds})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

module.exports = {
    following,
    getFollower,
    getCategoriesFolloweds
}