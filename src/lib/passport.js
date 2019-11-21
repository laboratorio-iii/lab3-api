'use strict'

const ServiceUser = require('../services/UserService')
const ServicePerson = require('../services/PersonService')
const bcrypt = require('../helpers/bcrypt')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { secret_key } = require('../config/setup')

const localRegisterStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback : true

    }, async (req, username, password, done) => {
        try {
            const user = await ServiceUser.getUserByUsername(username)

            if (user) {
                return done(null, false, 'Username already taken')
            }

            let newUser = await ServiceUser.createUser({
                username: username,
                password: await bcrypt.encrypPassword(password),
                image: req.body.image,

                firstname: req.body.person.firstname,
                lastname: req.body.person.lastname,
                birthdate: req.body.person.date,
                state: req.body.person.state,
                city: req.body.person.city
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
            let user = await ServiceUser.getUserByUsername(username)

            if (!user) {
                return done(null, false, 'User not found')
            }

            let matchPass = await bcrypt.matchPassword(password, user.password)
            
            if(!matchPass){
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