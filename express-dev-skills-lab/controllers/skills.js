const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,

};

function index(req, res) {
    res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.done = false;
    skill.create(req.body);
    //res.redirect because we need to take the the user back to my skills page 
    res.redirect('/skills');
}
function deleteSkill(req, res) {
    //delete a skill based on its Id aka index value in the skills array 
    Skill.deleteOne(req.params.id);
    // res.redirect to the skills page 
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function update(req, res) {
    // need to assign the res.body.done property
    req.body.done = !!req.body.done;
    // then update the object into the skills array inside of models/skill
    Skill.updateOne(req.body, req.params.id);
    // then redirect the user to the skills
    res.redirect('/skills');
}

