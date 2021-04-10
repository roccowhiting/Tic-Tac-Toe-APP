// load modules (require() statements)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// create/initialize the express app 
const app = express();

// configure appllications settings app.set()
app.set('view engine', 'ejs');

// mount applications middleware app.use()
app.use(morgan('dev')); // http logger middleware
app.use(express.static('public')); // this is how we serve CSS, imgs and js
app.use(express.urlencoded({extended: false })); // this is how we process html5 form data
// this middleware^ turns our form data into req.body
app.use(methodOverride('_method'));

app.use(function(req, res, next) {
    console.log('Hello intrepid learner');
    req.time = new Date().toLocaleTimeString();
    next();
});

// mount our routers/route handlers 

app.use('/', indexRouter);
app.use('/todos', todosRouter);



// tell our app to listen on a port - the app needs to process files 
// port will be used to run node process
app.listen(3000, function() {
    console.log('express is listening for request from browser');
});