// load modules (requiire() statements)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

// create/ initialize the express app 
const app = express();

// configure applications settings app.set()
app.set('view engine', 'ejs');


// mount applicationss middleware app.use()
app.use(morgan('dev')); //http logger middleware
app.use(express.static('public')); // this is how we serve CSS, imgs and javaScript. 
app.use(express.urlencoded({extended: false })); // this is how we process html5 from our data 
// ^ this middleware turns our form data into req.body
app.use(methodOverride('_method'));

app.use(function(req, res, next) {
    console.log('Hello intrepid Learner');
    req.time = new Date().toLocaleTimeString();
    next();
});


// mount our routers/route handlers 
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// tell our app to listen on a port- the app needs to process the files
// port will be used to run node process 
app.listen(3000, function() {
    console.log('express is listening for request from browser');
});