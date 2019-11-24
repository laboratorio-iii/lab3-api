'use strict'

const Follows = require('../db/models/Follows')
const serviceUser = require('./UserService')

async function createFollows(data) {
    const follows = new Follows(data)
    await follows.save()
    return follows
}

async function getFollowed(followed, follower) {
    const result = await Follows.findOne({followed, follower})
    return result
}

async function getFollower(follower, followed) {
    const result = await Follows.findOne({follower, followed})
    return result
}
async function getFollowers(followed) {
    const user = await serviceUser.getUserByUsername(followed)
    const result = await Follows.find({followed: user._id}).populate('follower')
    return result
}

module.exports = {
    createFollows,
    getFollowed,
    getFollower,
    getFollowers
  }