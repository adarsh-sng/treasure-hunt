const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSignupSchema = new Schema({
    teamName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("Team", TeamSignupSchema);
