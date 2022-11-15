const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const TodoListRouter =require('./Routes/TodoListRouter')

app.use(express.json())

app.use('/', TodoListRouter)

mongoose
  .connect("mongodb://127.0.0.1:27017/todolist")
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
