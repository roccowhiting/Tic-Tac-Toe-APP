module.exports = {
    getAll,
};


const student = [
    {text: 'Is a Graduate', done: false},
    {text: 'Is Super cool', done: true},
    {text: 'Will Graduate', done: true}, 
];

function getAll() {
    return student;
}