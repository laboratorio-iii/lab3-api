'use strict'

const Post = require('../db/models/Post')
const serviceCategory = require('./CategoryService')

async function createPost(data) {
    const category = await serviceCategory.getCategoryByName(data.category)
    const post = new Post(data)
    post.category = category._id
    await post.save()
    return post
}

async function getPostById(id) {
    const post = await Post.findById(id)
    return post
}

async function getPostsByUser(user) {
    const posts = await Post.find({user})
    return posts
}

async function getPostsByCategory(category) {
    const posts = await Post.find({category})
    return posts
}

async function getAllPosts() {
    const posts = await Post.find({}).populate({
            path: 'user category',
            populate: {
                path: 'city',
                populate: {
                    path: 'state'
                }
            }
        })

    return posts
}

async function deletePostById(id) {
    const post = await Post.findById(id)
    post.status = 'PD'
    return post
}

module.exports = {
    createPost,
    getPostById,
    getPostsByUser,
    getPostsByCategory,
    getAllPosts,
    deletePostById
  }