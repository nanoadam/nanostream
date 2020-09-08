const express = require('express');
const router = express.Router();

const {
  getVideos,
  getVideoByID,
  addVideo,
  updateVideo,
  addVideoView,
  uploadVideo,
} = require('../controllers/videos');

router.get('/', getVideos);
router.get('/:id', getVideoByID);
router.post('/', addVideo);
router.put('/:id', updateVideo);
router.put('/:id/view', addVideoView);
router.put('/:id/video', uploadVideo);

module.exports = router;
