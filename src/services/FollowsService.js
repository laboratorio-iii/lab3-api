'use strict'

const Follows = require('../db/models/Follows')

async function createFollows(data) {
    const follows = new Follows(data)
    await follows.save()
    return follows
}

async function getFollowedById(id) {
    const followed = await Follows.findById(id)
    return followed
}

async function getFollowerById(id) {
    const follower = await Follows.findById(id)
    return follower
}

module.exports = {
    createFollows,
    getFollowedById,
    getFollowerById
  }