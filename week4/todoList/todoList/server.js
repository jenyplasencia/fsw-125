const express = require("express")
const app = express()
const morgan = require('morgan')

//Middleware for every request
app.use(express.json()) 
app.use(morgan('dev'))

app.use("/alltodos", require("./todoRouter/todoList.js"))

const port = process.env.PORT || 8500
app.listen(port, () => {

  console.log(`Server is running on localhost: ${port}`)
})