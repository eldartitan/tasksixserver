const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    theme: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    sendFrom: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
});

module.exports = mongoose.model("message", MessageSchema);
