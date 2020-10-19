const bcrypt = require('bcryptjs');

const hashPassword = async (req, res, next) => {
  let password = req.body.password;

  const salt = await bcrypt.genSalt(10);

  password = await bcrypt.hash(password, salt);

  req.body.password = password;

  next();
};

module.exports = {
  hashPassword,
};
