const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { app, httpServer } = require("./socket/socket")
require("dotenv").config()
const path = require("path")
console.log(__dirname);


// const app = express()

// Step 1 middleware
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin: true, credentials: true }))
// step 2 routes
app.use("/api/notes", require("./routes/todo.routes"))
// step 3 404 routes
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "Resource Not Found" })
})
// step 4 error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})
// step 5 connection
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    httpServer.listen(process.env.PORT, console.log("SERVER RUNNING"))

})