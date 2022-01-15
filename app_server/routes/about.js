const express = require('express');
const router = express.Router();
const controller= require('../controllers/about');

/* GET home page. */
router.get('/', controller.about);

module.exports = router;