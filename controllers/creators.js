// @route     /api/v1/creators/
// @desc      GET all creators
// @access    Public
exports.getCreators = (req, res, next) => {
  res.send("Getting Creators");
};

// @route     /api/v1/creators/:id
// @desc      GET single creator by ID
// @access    Public
exports.getCreator = (req, res, next) => {
  res.send("Getting A Single Creator");
};

// @route     /api/v1/creators/
// @desc      CREATE a new creator
// @access    Private - Role: User
exports.newCreator = (req, res, next) => {
  res.send("Adding New Creator");
};

// @route     /api/v1/creators/:id
// @desc      UPDATE a creator
// @access    Private - Role: User
exports.updateCreator = (req, res, next) => {
  res.send(`Upading Creator ${req.params.id}`);
};

// @route     /api/v1/creators/:id
// @desc      DELETE a creator
// @access    Private - Role: User
exports.deleteCreator = (req, res, next) => {
  res.send("Deleting Creator");
};
