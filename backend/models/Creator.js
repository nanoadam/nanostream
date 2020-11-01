const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
  },
  website: {
    type: String,
    required: [true, 'Please enter a website'],
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL. Be sure to include HTTP or HTTPS',
    ],
  },
  country: {
    type: String,
    required: [true, 'Please enter a country'],
  },
  social: {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'user',
  },
  videos: [
    {
      videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
      },
      name: String,
      view: Number
    }
  ]
});

module.exports = Creator = mongoose.model('Creator', CreatorSchema);
