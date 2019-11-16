'use strict'

const passport = require('passport')
const jwt = require('jsonwebtoken')

const error_types = require('../helpers/errors')

const { secret_key, jwt_lifetime } = require('../config/setup')

function login(req, res) {
    passport.authenticate('local.login', {session: false}, (error, user, info) => {
        try {
            if (error) {
                console.log(error)
            }
            if (info) {
                throw new error_types.Error404(info)
            }
            else {
                const payload = {
                    sub: user.id,
                    exp: Date.now() + parseInt(jwt_lifetime),
                    username: user.username
                }

                const token = jwt.sign(JSON.stringify(payload), secret_key)
                res.status(200).json({success: true, user: user, token: token})
            }
        } catch(e) {
            // console.log(e)
            res.send(e)
        }

    })(req, res)
}

function register(req, res, next) {
    passport.authenticate('local.register', {session: false}, (error, user, info) => {
        try {
            if (error) {
                console.log(error)
            }
            if (info) {
                throw new error_types.InfoError(info)
            }
            else {
                res.status(200).json({user})
            }
        } catch(e) {
            // console.log(e)
            res.send(e)
        }
    })(req, res, next)
}

module.exports = {
    login,
    register
}