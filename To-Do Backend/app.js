// Core Module
const path = require('path');

// External Module
const express = require('express');
const {default: mongoose} = require('mongoose');
const rootDir = require('./utils/pathUtil');
const cors = require('cors');
const bodyParser = require('body-parser');
const DB_PATH = process.env.MONGODB_URI;

//Local Module
const errorController = require('./controllers/ErrorController');
const todoItemsRouter = require('./routes/toDoItemsRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);
app.use(errorController.Error404);
 
const PORT = process.env.PORT || 3000;

mongoose.connect(DB_PATH).then(() => {
  console.log("Connected to MongoDB.");
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("Error while connecting to MongoDB.", err);
})