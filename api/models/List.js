const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        unique: true,
    },
    type: {
        type: String,
    },
    content: {
        type: Array,
    },
    genre: {
        type: String,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("List", ListSchema)