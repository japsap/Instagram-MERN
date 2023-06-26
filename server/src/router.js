const router = require('express').Router();
const authController = require('./Controllers/authController');

router.use('/', authController);


module.exports = router