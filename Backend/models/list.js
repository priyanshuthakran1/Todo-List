const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Remove the user field from JSON output to avoid circular structure
listSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.user; // Remove user reference to avoid circular structure
    return obj;
};

const List = mongoose.model("List", listSchema);
module.exports = List;