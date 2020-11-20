var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
];
let primaryId = 2;
// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(`this is your todo's ${todoList.todo}`)
})
// GET /api/todos/:id
app.get(`/api/todos/ :id`, (req, res) => {
    const todoID = req.params.id;
    res.send(todoID) 
})
// POST /api/todos
app.post('/api/todos', (req, res) => {
    let newItem = [
        ...todoList,
        req.body
    ]
    res.send(newItem)
    todoList.push(req.body);

    res.send(todoList)
    res.status(200).json({
        message: "Task created succesfully"
    })
})
// PUT /api/todos/:id
app.put('/api/todos', (req, res) => {
    
})
// DELETE /api/todos/:id
app.delete('/api/todos', (req, res) => {
    
})
app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})