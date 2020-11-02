const Video = require('../models/Video');

// @route     /api/v1/videos/
// @desc      GET all videos
// @access    Public
exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();
    if (videos.length === 0) {
      return res.status(500).json({ success: false, err: 'No Videos Found' });
    }
    res.status(200).json({
      success: true,
      videos,
    });
  } catch (error) {
    next(err);
  }
};

// @route     /api/v1/videos/:id
// @desc      GET video based on id
// @access    Public
exports.getVideoByID = async (req, res, next) => {
  try {
    const videos = await Video.findById(req.params.id);
    if (videos.length === 0) {
      return res.status(500).json({
        success: false,
        msg: `No video found with id ${req.params.id}`,
      });
    }
    res.send(`Getting video by id: ${req.params.id}`);
  } catch (err) {
    next(err);
  }
};

// @route     /api/v1/videos/
// @desc      POST a new video
// @access    Private
exports.addVideo = async (req, res, next) => {
  try {
    const video = await Video.create(req.body);
    res.send('Adding a video');
  } catch (error) {
    next(error);
  }
};

// @route     /api/v1/videos/:id
// @desc      PUT video based on id
// @access    Private (Creator who uploaded)
exports.updateVideo = async (req, res, next) => {
  res.send('Updating the video');
};

// @route     /api/v1/videos/:id/view
// @desc      PUT video view
// @access    Public
exports.addVideoView = async (req, res, next) => {
  res.send('Adding a video view');
};

// @route     /api/v1/videos/:id/video
// @desc      PUT upload video
// @access    Private (creator who added)
exports.uploadVideo = async (req, res, next) => {
  res.send('We are uploading the actual video file');
};
