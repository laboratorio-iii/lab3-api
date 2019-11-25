'use strict'

const Category_Follows = require('../db/models/Category_Follows')
const serviceUser = require('./UserService')

async function createCategory_Followed(data) {
    const follows = new Category_Follows(data)
    await follows.save()
    return follows
}

async function getCategory_Followed(category, user) {
    const result = await Category_Follows.findOne({category, user})
    return result
}

async function getCategories_Followeds(follower) {
    const user = await serviceUser.getUserByUsername(follower)
    const result = await Category_Follows.find({user: user._id, status: true}).populate('category')
    return result
}

module.exports = {
    createCategory_Followed,
    getCategory_Followed,
    getCategories_Followeds
  }