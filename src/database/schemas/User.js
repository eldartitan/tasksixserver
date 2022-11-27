const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    messages: {
        type: [
            {
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
            },
        ],
        default: [],
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
});

module.exports = mongoose.model("users", UserSchema);
