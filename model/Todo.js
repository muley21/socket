const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: String, default: false },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)