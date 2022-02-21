const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const blogpostsController = require('../controllers/blogposts');

router.route('/trips').get(tripsController.tripsList).post(tripsController.tripsAddTrip);
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode).put(tripsController.tripsUpdateTrip);
router.route('/blogposts').get(blogpostsController.blogpostList);

module.exports = router;