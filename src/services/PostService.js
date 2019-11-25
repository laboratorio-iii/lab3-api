'use strict'

const Post = require('../db/models/Post')
const serviceUser = require('./UserService')
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

async function getPostsByUser(username) {
    const user = await serviceUser.getUserByUsername(username)
    const posts = await Post.find({user: user._id}).populate({
        path: 'user category author',
        populate: {
            path: 'city',
            populate: {
                path: 'state'
            }
        }
    }).sort({'createdAt': -1})
    return posts
}

async function getPostsByCategory(category) {
    const posts = await Post.find({category})
    return posts
}

async function getAllPosts() {
    const posts = await Post.find({}).populate({
            path: 'user category author',
            populate: {
                path: 'city',
                populate: {
                    path: 'state'
                }
            }
        }).sort({'createdAt': -1})

    return posts
}

async function deletePostById(id) {
    const post = await Post.findById(id)
    post.status = 'PD'
    return post
}

async function filterPost(param) {
    const posts = await Post.find({title: { $regex: '.*' + param + '.*' }}).populate({
        path: 'user category author',
        populate: {
            path: 'city',
            populate: {
                path: 'state'
            }
        }
    }).sort({'createdAt': -1})
    return posts
}

async function filterPostByCategory(title, category_name) {
    const category = await serviceCategory.getCategoryByName(category_name)
    const posts = await Post.find({ $and: [ { title: { $regex: '.*' + title + '.*' } }, { category: category._id } ] }).populate({
        path: 'user category author',
        populate: {
            path: 'city',
            populate: {
                path: 'state'
            }
        }
    }).sort({'createdAt': -1})
    return posts
}

module.exports = {
    createPost,
    getPostById,
    getPostsByUser,
    getPostsByCategory,
    getAllPosts,
    deletePostById,
    filterPost,
    filterPostByCategory
  }