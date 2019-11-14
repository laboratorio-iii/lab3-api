'use strict'

const serviceComment = require('../services/CommentService')

async function getComment(req, res) {
    try {
        const { id } = req.params.id
        const comment = await serviceComment.getCommentById(id)
        res.status(200).json({message: 'Success'}, comment)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function getComments(req, res) {
    try {
        const comments = await serviceComment.getAllComments()
        res.status(200).json({message: 'Success'}, comments)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function updateComment(req, res) {
    try {
        const { id } = req.params.id
        const data = req.body
        const comment = await serviceComment.updateComment(id, data)
        res.status(200).json({message: 'Success'}, comment)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

async function deleteComment(req, res) {
    try {
        const { id } = req.params.id
        const comment = await serviceComment.deleteCommentById(id)
        res.status(200).json({message: 'Success'}, comment)
    } catch(err) {
        res.status(401).json({message: 'Failed'})
    }
}

module.exports = {
    getComment,
    getComments,
    updateComment,
    deleteComment
}