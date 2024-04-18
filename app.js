
const express = require('express')
const { appendFile } = require('fs');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))



app.get('/', (_, response) => {
	response.sendFile('index.html', { root })
})

app.use(express.json());
app.use('/api/todos', require('./api-routes/api-routes'))
app.use(require('./api-routes/static'))



const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))