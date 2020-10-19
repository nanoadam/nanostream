const express = require('express');
const { checkAuth, registerUser, login } = require('../controllers/Auth');
const router = express.Router();
const { hashPassword } = require('../middleware/hashPassword');
const { auth } = require('../middleware/auth');

router.route('/').get(auth, checkAuth);
router.route('/register').post(authenticate);
router.route('/login').post(login);

module.exports = router;
