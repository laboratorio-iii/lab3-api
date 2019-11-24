const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let NotificationTypeSchema = new Schema({

    content: String,
    post: { type: Schema.ObjectId, ref: "Post" },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

NotificationTypeSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

NotificationTypeSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

NotificationTypeSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.NotificationType */
module.exports = mongoose.model('NotificationType', NotificationTypeSchema);
