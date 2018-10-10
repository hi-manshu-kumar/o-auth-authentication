const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String
});

const User = mongooose.model('user', userSchema);

module.exports = User;