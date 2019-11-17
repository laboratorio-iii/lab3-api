'use strict'

const servicePost = require('../services/PostService')
const serviceLike = require('../services/LikeService')
const serviceComment = require('../services/CommentService')

async function createPost(req, res) {
    try {
        const data = req.body
        const post = await servicePost.createPost(data)
        res.status(200).json({message: 'Success', post})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPost(req, res) {
    try {
        const { id } = req.params.id
        const post = await servicePost.getPostById(id)
        res.status(200).json({message: 'Success', post})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPostsByUser(req, res) {
    try {
        const { user } = req.body
        const posts = await servicePost.getPostsByUser(user)
        res.status(200).json({message: 'Success', posts})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPostsByCategory(req, res) {
    try {
        const { category } = req.params.category
        const posts = await servicePost.getPostByCategory(category)
        res.status(200).json({message: 'Success', posts})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getPosts(req, res) {
    try {
        const posts = await servicePost.getAllPosts()
        
        const { user } = req.params
        const likes = await serviceLike.getLikesByUser(user)
        const comments = await serviceComment.getAllComments() 
        res.status(200).json({message: 'Success', posts, likes, comments})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function deletePost(req, res) {
    try {
        const { id } = req.params.id
        const post = await servicePost.deletePostById(id)
        res.status(200).json({message: 'Success', post})
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    createPost,
    getPost,
    getPostsByUser,
    getPostsByCategory,
    getPosts,
    deletePost
}