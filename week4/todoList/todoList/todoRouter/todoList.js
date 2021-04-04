const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const alltodos = [
{ 
    title: "Meeting with Representative", 
    description: "District 9-1/Emily Dumm", 
    imageUrl:"http://www.dot.ga.gov/AboutGeorgia/Board/PublishingImages/members/EmilyDunn-Full.jpg",
    completed: false, 
    id: uuidv4()
},
{ 
    title: "Meeting with Representative", 
    description: "District 6/Lucy McBath", 
    imageUrl:"https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/250/450/McBath__Lucy__official_resize_fixed.jpg",
    completed: false, 
    id: uuidv4()
}
]

todoRouter.get("/", (req, res) => {
  res.send(alltodos);
})

todoRouter.get("/:todoId", (req, res)=>{
  const todoId = req.params.todoId
  const getTodos = alltodos.find(todo => todo.id === todoId)
  res.send(getTodos)
})

todoRouter.post("/", (req, res) => {
  const newTodo = req.body
  newTodo.id = uuidv4()
  alltodos.push(newTodo)
  res.send(`The task: ${req.body.title} was added to the database.`)
})

todoRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId
  const todoIndex = alltodos.findIndex((todo) => todo._id === todoId)
  alltodos.splice(todoIndex, 1)
  res.send("Task Deleted")
});

todoRouter.put("/:todoId", (req, res) => {
  //const updateBody = req.body
  const todoId = req.params.todoId
  const todoIndex = alltodos.findIndex((todo) => todo.id === todoId)
  const modifiedTodo = Object.assign(alltodos[todoIndex], req.body)
  res.send(modifiedTodo)
})

module.exports = todoRouter

