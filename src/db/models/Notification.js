const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let NotificationSchema = new Schema({

    performer: { type: Schema.ObjectId, ref: "User" },
    receiver: { type: Schema.ObjectId, ref: "User" },
    type: { type: Schema.ObjectId, ref: "NotificationType" },
    status: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

NotificationSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

NotificationSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

NotificationSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Notification */
module.exports = mongoose.model('Notification', NotificationSchema);
