const asyncHandler = require("express-async-handler")

exports.createTodo = asyncHandler(async (req, res) => {
    res.json({ message: "createTodo Success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    res.json({ message: "readTodo Success" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    res.json({ message: "updateTodo Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    res.json({ message: "deleteTodo Success" })
})
