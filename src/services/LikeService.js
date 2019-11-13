'use strict'

const Like = require('../db/models/Like')

async function createLike(data) {
    const like = new Like(data)
    await like.save()
    return like
}

async function getLikeByUser(user) {
    const userFound = await Like.find(user)
    return userFound
}

async function getLikesByPost(post) {
    const likes = await Like.find(post)
    return likes
}

module.exports = {
    createLike,
    getLikeByUser,
    getLikesByPost
  }