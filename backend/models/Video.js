const mongoose = require('mongoose');
const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a video title'],
    maxLength: [125, 'There is a limit of 125 characters for video title'],
    minLength: [5, 'Video title must be at least 5 characters long'],
  },
  description: {
    type: String,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'Creator',
    required: true,
  },
  path: {
    type: String,
    unique: true,
  },
  views: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  access: {
    type: String,
    required: true,
    enum: ['Public', 'Private'],
    default: 'Private',
  },
  timestamp: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Video', VideoSchema);
