const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.get);

module.exports = router;