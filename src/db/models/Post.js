const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let PostSchema = new Schema({

    user: String,
    title: String,
    description: String,
    category: String,
    image: String,
    price: Number,
    status: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

PostSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

PostSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

PostSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Post */
module.exports = mongoose.model('Post', PostSchema);
