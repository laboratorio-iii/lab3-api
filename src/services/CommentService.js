'use strict'

const Comment = require('../db/models/Comment')

async function createComment(data) {
    const comment = new Comment(data)
    await comment.save()
    return comment
}

async function updateComment(id, data) {
    const comment = await comment.updateOne({_id: id, data})
    return comment
}

async function getCommentById(id) {
    const comment = await Comment.findById(id)
    return comment
}

async function getCommentsByPost(idpost) {
    const comments = await Comment.find({post: idpost})
    return comments
}

async function getAllComments() {
    const comments = await Comment.find()
    return comments
}

async function deleteCommentById(id) {
    const comment = await Comment.remove({_id: id})
    return comment
}

module.exports = {
    createComment,
    updateComment,
    getCommentById,
    getAllComments,
    getCommentsByPost,
    deleteCommentById
  }