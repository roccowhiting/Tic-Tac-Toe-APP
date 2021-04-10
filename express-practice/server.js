// load modules (require() statements)
const express = require('express');
const todoDb = require('./data/todo-db'); //<-- Relative file path

// create/initialize the express app 
const app = express(); // <-- constructore pattern

// configure application settings app.set()
app.set('view engine', 'ejs');

// mount application middleware app.use()

// mount our routers/route handlers 


// http://localhost:3000/ <---root route
app.get('/', function(req, res) {
    res.send('<h1>Asuh dude!</h1>');
});

// define another route handler here 

app.get('/home', function(req, res) {
    res.render('home');

});

app.get('/todos', function(req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
});

// tell out app to listen on a port - our app needs to process files - Software Process. 
app.listen(3000, function() {
    console.log('express is listening for request from browser');
});