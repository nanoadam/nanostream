const Creator = require("../models/Creator");
// @route     /api/v1/creators/
// @desc      GET all creators
// @access    Public
exports.getCreators = async (req, res, next) => {
  try {
    const creators = await Creator.find();
    if (creators.length === 0)
      return res.status(200).json({ success: false, err: "No Creators Found" });
    else res.status(200).json({ success: true, data: creators });
  } catch (error) {
    console.log(error);
  }
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
exports.addCreator = async (req, res, next) => {
  try {
    const creator = await Creator.create(req.body);
    await res.status(200).json({ success: true, data: creator });
  } catch (err) {
    let errors = await Object.values(err.errors).map((val) => val.message);
    res.status(400).json({ success: false, err: errors });
    console.log(errors);
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
  res.send("Deleting Creator");
};

// @route     /api/v1/creators/:id/
// @desc      UPDATE Upload a Creator Logo/Img
// @access    Private - Role: Creator
exports.uploadCreatorImage = (req, res, next) => {
  res.send("Uploading Creator Image");
};
