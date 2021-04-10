module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};

const skills = [
    {text: 'html5', done: true},
    {text: 'CSS3', done: false},
    {text: 'node.js', done: false},
    {text: 'JavaScript', done: false},
    {text: 'Express', done: true},
    {text: 'MangoDB', done: false},
    {text: 'Python', done: false},
    {text: 'Mongoose', done: false},
];

function getAll() {
    return skills;
};

function getOne(skillIdx) {
    return skills[skillIdx];
};

function create(skill) {
    skills.push(skill);
};

function deleteOne(skillIdx) {
    skills.splice(skillIdx, 1);
};

function updateOne(updatedSkill, skillIdx) {
    skills.splice(skillIdx, 1, updatedSkill);
};