
const router = require('express').Router()
const { getCollection, ObjectId } = require('../todo-db')

router.get('/', async (_, response) => {
    const collection = await getCollection('Todo-API', 'Todos');
    const todos = await collection.find({}).toArray();
    response.json(todos);
});

router.post('/', async (request, response) => {
    const { item } = request.body;
    const collection = await getCollection('Todo-API', 'Todos');
    const result = await collection.insertOne({ item, complete: false });
});

router.put('/:id', async (request, response) => {
    const { id } = request.params

    const collection = await getCollection('Todo-API', 'Todos');

    const todo = await collection.findOne({ _id: new ObjectId(id) })
    const complete = !todo.complete
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { complete } })
     response.json(result)
});


module.exports = router
