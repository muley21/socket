const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")
const { io } = require("../socket/socket")

exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    io.emit("todo-create-response", result)
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
    await Todo.findByIdAndDelete(req.params.id)
    const result = await Todo.find()
    io.emit("todo-create-response", result)
    res.json({ message: "deleteTodo Success" })
})
