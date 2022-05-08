const express = require('express');

// set up router
const router = express.Router();

// set up path for controller function
const homeController = require('../controllers/home_controller');

console.log('router loaded');

// Set up controller function to a route
router.get('/', homeController.home);


// Route all requests starting with '/users' to users.js file
router.use('/users', require('./users'));

//for any further routes, access from here
// router.use('/routerName', require('./routerfile'))

// Exporting router
module.exports = router;