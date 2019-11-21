const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'), require('../../config/mongoose'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let UserSchema = new Schema({

    username: String,
    password: String,
    rol: {
        type: String,
        default: 'Regular'
    },
    image: String,
    status: {
        type: String,
        default: 'UA'
    },

    //Person
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    birthdate: {
        type: Date
    },
    state: {
        type: String
    },
    city: {
        type: String
    },

    //Follows
    followeds: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

UserSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

UserSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.User */
module.exports = mongoose.model('User', UserSchema);
