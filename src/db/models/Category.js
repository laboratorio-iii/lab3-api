const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'), require('../../config/mongoose'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let CategorySchema = new Schema({

    name: String,
    status: { type: Boolean, default: true },

    followed: {
        type: Boolean, 
        default: false
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

CategorySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

CategorySchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

CategorySchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Category */
module.exports = mongoose.model('Category', CategorySchema);
