const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');

// This is where we define our routes
router.get('/', indexCtrl.index);


module.exports = router;