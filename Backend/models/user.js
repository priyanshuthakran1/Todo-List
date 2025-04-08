const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }] // Reference to List model
});

const User = mongoose.model("User", userSchema);
module.exports = User;
