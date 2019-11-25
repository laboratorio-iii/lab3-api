const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let Category_FollowsSchema = new Schema({

    user: { type: Schema.ObjectId, ref: "User" },
    category: { type: Schema.ObjectId, ref: "Category" },
    status: {
        type: Boolean,
        default: true
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

Category_FollowsSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

Category_FollowsSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

Category_FollowsSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Category_Follows */
module.exports = mongoose.model('Category_Follows', Category_FollowsSchema);
