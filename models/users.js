const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 20,
        min: 4
    },
    password: {
        type: String,
        required: true,
        max: 20,
        min: 6
    }
})

module.exports = mongoose.model('Users', UsersSchema);