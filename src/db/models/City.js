const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'), require('../../config/mongoose'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let CitySchema = new Schema({

    name: String,
    state: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

CitySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

CitySchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

CitySchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.City */
module.exports = mongoose.model('City', CitySchema);
