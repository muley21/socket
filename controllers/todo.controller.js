const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.createTodo = asyncHandler(async (req, res) => {
    const result = await Todo.create(req.body)
    res.json({ message: "createTodo Success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "readTodo Success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "updateTodo Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "deleteTodo Success" })
})
