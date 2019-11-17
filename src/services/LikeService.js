'use strict'

const Like = require('../db/models/Like')

async function createLike(data) {
    const like = new Like(data)
    await like.save()
    return like
}

async function getLikeByUser(user, post) {
    const userFound = await Like.findOne({user, post})
    return userFound
}

async function getLikesByUser(user) {
    const likes = await Like.find({user})
    return likes
}

async function getLikeByPost(user, post) {
    const like = await Like.findOne({user, post})
    return like
}

module.exports = {
    createLike,
    getLikeByUser,
    getLikeByPost,
    getLikesByUser
  }