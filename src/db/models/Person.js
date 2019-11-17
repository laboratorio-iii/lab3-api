const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'), require('../../config/mongoose'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let PersonSchema = new Schema({

    user: String,
    firstname: String,
    lastname: String,
    birthdate: Date,
    state: String,
    city: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

PersonSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

PersonSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

PersonSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Person */
module.exports = mongoose.model('Person', PersonSchema);
