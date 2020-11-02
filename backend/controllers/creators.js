const Creator = require('../models/Creator');
// @route     /api/v1/creators/
// @desc      GET all creators
// @access    Public
exports.getCreators = async (req, res, next) => {
  try {
    const creators = await Creator.find();
    if (creators.length === 0)
      return res.status(500).json({ success: false, err: 'No Creators Found' });
    res.status(200).json({ success: true, data: creators });
  } catch (error) {
    next(err);
  }
};

// @route     /api/v1/creators/:id
// @desc      GET single creator by ID
// @access    Public
exports.getCreator = async (req, res, next) => {
  try {
    const creator = await Creator.findById(req.params.id);
    if (creator) {
      return res.status(200).json({ success: true, data: creator });
    } else res.status(404).json({ success: false, err: 'Creator not found' });
  } catch (err) {
    next(err);
  }
};

// @route     /api/v1/creators/
// @desc      CREATE a new creator
// @access    Private - Role: User
exports.addCreator = async (req, res, next) => {
  try {
    const creator = await Creator.create(req.body);
    await res.status(200).json({ success: true, data: creator });
  } catch (err) {
    let errors = await Object.values(err.errors).map((val) => val.message);
    res.status(400).json({ success: false, err: errors });
    console.log(errors);
    next(err);
  }
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
  res.send('Deleting Creator');
};

// @route     /api/v1/creators/:id/
// @desc      UPDATE Upload a Creator Logo/Img
// @access    Private - Role: Creator
exports.uploadCreatorImage = (req, res, next) => {
  res.send('Uploading Creator Image');
};
