// @route     /api/v1/videos/
// @desc      GET all videos
// @access    Public
exports.getVideos = async (req, res, next) => {
  res.send('Getting all videos');
};

// @route     /api/v1/videos/:id
// @desc      GET video based on id
// @access    Public
exports.getVideoByID = async (req, res, next) => {
  res.send(`Getting video by id: ${req.params.id}`);
};

// @route     /api/v1/videos/
// @desc      POST a new video
// @access    Public
exports.addVideo = async (req, res, next) => {
  res.send('Adding a video');
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
