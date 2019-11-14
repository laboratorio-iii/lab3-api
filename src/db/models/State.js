const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'), require('../../config/mongoose'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let StateSchema = new Schema({

    name: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

StateSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

StateSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

StateSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.State */
module.exports = mongoose.model('State', StateSchema);
