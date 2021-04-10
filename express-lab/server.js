// load modules (require() statements)
const express = require('express');

// create/initialize the express app
const app = express();

// configure application settings app.set()
app.set('view engine', 'ejs'); 

//mount application middleware app.use()
app.use(express.static('public'));

// mount our routers/route handlers
app.get('/', function(req, res) {
    res.send('<h1>This Student</h1>');
});

//tell our app to listen on a port - our app needs to process files - Software process
app.listen(3000, function() {
    console.log('express is listening for req from browser');
});