'use strict'

const Post = require('../db/models/Post')

async function createPost(data) {
    const post = new Post(data)
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
    const posts = await Post.find()
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