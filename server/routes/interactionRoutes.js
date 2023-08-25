const express = require('express');
const router = express.Router();
const interactionController = require('../controllers/interactionController');


router.post('/follow/:userId', interactionController.followUser);


router.post('/unfollow/:userId', interactionController.unfollowUser);

module.exports = router;
