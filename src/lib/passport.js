'use strict'

const ServiceUser = require('../services/UserService')
const bcrypt = require('../helpers/bcrypt')

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
            const users = await ServiceUser.getUserByField(username)
            if (users.length > 0) {
                return done(null, false, 'Username already taken')
            }

            let newUser = await ServiceUser.createUser({
                username: username,
                password: await bcrypt.encrypPassword(password)
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
            let user = await ServiceUser.getUserByField(username)
            
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
        const user = await ServiceUser.getUserById(payload.sub)
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