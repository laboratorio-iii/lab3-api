'use strict'

const User = require('../models/User')
const bcrypt = require('../helpers/bcrypt')
// const Sequelize = require('sequelize')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { secret_key } = require('../config/setup')

const localRegisterStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false

    }, async (username, password, done) => {
        try {
            const users = await User.findAll({
                where: {
                    username
                }
            })
            if (users.length > 0) {
                return done(null, false, 'Username already taken')
            }
    
            let newUser = await User.create({
                username: username,
                email: 'email@gmail.com',
                password: await bcrypt.encrypPassword(password),
                rol: 2,
                estatus: 1,
                created_at: Date.now(),
                updated_at: Date.now()
            }, {
                fields: ['username', 'email', 'password', 'rol', 'estatus', 'created_at', 'updated_at']
            })
            if (!newUser) {
                return done(null, false, 'Something went wrong') //Error on BD
            }
            else {
                return done(null, newUser)
            }
        } catch(err) {
            done(err, null)
        }
})

passport.use('local.register', localRegisterStrategy)

const  localLoginStrategy = new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false
    }, async (username, password, done)=>{
        try {
            let user = await User.findOne({
                where: {
                    // [Sequelize.Op.or]: [{username: username}, {email: username}]
                    username
                }
            })
            if (!user) {
                return done(null, false, 'User not found')
            }
            if (!bcrypt.matchPassword(password, user.password)){
                return done(null, false, 'Password does not match')
            }
            return done(null, user) //Login successfully
        } catch(err) {
            done(err, null) //Error on DB
        }
}) 

passport.use('local.login', localLoginStrategy);

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret_key
}

const jwtStrategy = new JwtStrategy(opts, async (payload, done) => {
    try{    
        const user = await User.findOne({
            where: {
                id: payload.sub
            }
        })
        if (user) {
            done(null, user)
        } else {
            done(null, false, { message: 'User not found' })
        }
        
    } catch(e) {
        done(e)
    }
})

passport.use(jwtStrategy)