const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
};

function index(req, res) {
    res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time
    });
}

function show(req, res) {
    res.render('todos/show', { 
        todo: Todo.getOne(req.params.id),
        todoId: req.params.id
    });
}

function newTodo(req, res) {
    res.render('todos/new');
}

function create(req, res) {
    //create the todo by adding it to our todos array inside of models/todo
    req.body.done = false;
    Todo.create(req.body);
    //res.redirect because we need to tske the user back to the page with all the todos
    res.redirect('/todos');
}

function deleteTodo(req, res) {
    // delete a todo based on its id aka index value in the todos arrray
    Todo.deleteOne(req.params.id);
    // res.redirect to the index page 
    res.redirect('/todos');
}

function edit(req, res) {
   res.render('todos/edit', {
       todo: Todo.getOne(req.params.id),
       todoId: req.params.id
   });
}

function update(req, res) {
    // we need to assign the req.body.done property 
    req.body.done = !!req.body.done;
    
    //then we need to update the object in the todos array inside models/todo
    Todo.updateOne(req.body, req.params.id);

    // res.redirect /todos
    res.redirect('/todos');
}