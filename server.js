var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API",
    },
];
let primaryId = 2;
// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList)
})
// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    let todoItem = todoList.find((todo) => {
        return todo.id === Number(todoId);
    })
    res.send(todoItem) 
})
// POST /api/todos
app.post('/api/todos', (req, res) => {
    todoList.push({
        id: primaryId,
        todo: req.body.todo 
    });
    primaryId++
    res.send(todoList)
})
// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    let todoItem = todoList.find((todo) => {
        return todo.id === Number(todoId);
    })
    todoItem.todo = req.body.todo
    res.send(todoItem) 
})
// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    let todoItem = todoList.find((todo) => {
        return todo.id === Number(todoId);
    })
    for(let i = 0; i <= todoList.length; i++) {
        if(todoList[i] === todoItem) {
            todoList.splice(i, 1)
        }
    }
    res.send(todoList) 
})
app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})