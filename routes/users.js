const express = require('express');
const router = express.Router();

// import actions controller path to use required controller
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);


module.exports = router;