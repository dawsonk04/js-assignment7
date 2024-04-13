
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

const todos = [
	{ id: 1, item: 'Learn JavaScript', complete: false },
	{ id: 2, item: 'Learn Express', complete: false },
	{ id: 3, item: 'Build a To Do App', complete: false }
]

app.get('/', (_, response) => {
	response.sendFile('index.html', { root })
})



// GET /api/todos
app.get('/api/todos', (req,res) => {
	res.json(todos)
})
// POST /api/todos
app.post('/api/todos', (req, res) => {
    const { item } = req.body;
    const newId = todos.length + 1; 
    const newTodo = { id: newId, item, complete: false };
    todos.push(newTodo);  
});
// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const task = todos.find(todo => todo.id.toString() === id)
    task.complete = !task.complete;
    res.json({ id: task.id, complete: task.complete });
});


const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))