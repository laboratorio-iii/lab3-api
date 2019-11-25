'use strict'

const servicePost = require('../services/PostService')

async function createPost(req, res) {
    try {
        const data = req.body
        console.log(data)
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
        const { user } = req.params
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
        res.status(200).json({message: 'Success', posts})
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

async function getPostsBySearch(req, res) {
    try {
        const input  = req.body.input
        const posts = []
        const fposts = await servicePost.filterPost(input)
        fposts.forEach(fpost => {
            posts.push(fpost)
        })
        return res.status(200).json({message: 'Success', posts})
        
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

async function getPostsBySearchByCategory(req, res) {
    try {
        const input  = req.body.input
        const category  = req.body.category
        const posts = []

        const fposts = await servicePost.filterPostByCategory(input, category)
        fposts.forEach(fpost => {
            posts.push(fpost)
        })

        return res.status(200).json({message: 'Success', posts})
    } catch(err) {
        res.status(500).json({message: 'Failed'})
    }
}

module.exports = {
    createPost,
    getPost,
    getPostsByUser,
    getPostsByCategory,
    getPosts,
    deletePost,
    getPostsBySearch,
    getPostsBySearchByCategory
}