const express = require('express');
const router = express.Router();

// import actions controller path to use required controller
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create)

module.exports = router;