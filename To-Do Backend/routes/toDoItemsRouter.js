const express = require('express');
const todoItemsRouter = express.Router();

const toDoItemController = require('../controllers/toDoItemsController');

todoItemsRouter.get('/', toDoItemController.getToDoItems);
todoItemsRouter.post('/', toDoItemController.createToDoItem);
todoItemsRouter.delete('/:id', toDoItemController.deleteToDoItem);
todoItemsRouter.put('/:id/completed', toDoItemController.markCompleted);

module.exports = todoItemsRouter;