'use strict'

const passport = require('passport')

const error_types = require('../helpers/errors')

function isAuthenticated (req, res, next) {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err) {
            return next(err)
        }
        if (info) {
            return next(new error_types.Error401(info.message))
        }
        if (!user) { 
            return next(new error_types.Error403('You are not allowed not access'))
        }

        req.user = user
        next()
    })(req, res, next)
}

module.exports = {
    isAuthenticated
}