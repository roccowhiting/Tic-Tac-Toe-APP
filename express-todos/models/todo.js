module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};

const todos = [
    {text: 'Feed Dogs', done: true},
    {text: 'Buy Energy', done: false},
    {text: 'Learn Express', done: false},
];

function getAll() {
    return todos;
};

function getOne(todoIdx) {
    return todos[todoIdx];
};

function create(todo) {
    todos.push(todo);
}

function deleteOne(todoIdx) {
    todos.splice(todoIdx, 1);
}

function updateOne(updatedTodo, todoIdx) {
    todos.splice(todoIdx, 1, updatedTodo);
}