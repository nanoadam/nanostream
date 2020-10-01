const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// @route     POST api/auth/
// @desc      Check auth of User
// @access    Private
exports.checkAuth = async (req, res, next) => {
  try {
    const userID = req.user;

    let user = await User.findById(userID.id).select('-password -_id');

    let token = await generateToken(user);

    res.json({ success: true, msg: 'User is valid', token, user });
  } catch (err) {
    next(err);
  }
};

// @route     POST api/auth/
// @desc      Login User
// @access    Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user)
      return await res.status(403).json({
        success: false,
        msg: 'The email or password is incorrect',
      });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return await res.status(403).json({
        success: false,
        msg: 'The email or password is incorrect',
      });

    let token = await generateToken(user);

    await res.json({
      success: true,
      msg: `User ${email} has been logged in`,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

// @route     POST api/auth/register
// @desc      Register a user
// @access    Public
exports.registerUser = async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    let user = await User.create({
      name,
      email,
      password,
    });

    let token = await generateToken(user);

    await res.json({
      success: true,
      msg: `User ${email} with id of ${user._id} has been created.`,
      token,
    });
  } catch (err) {
    next(err);
  }
};
