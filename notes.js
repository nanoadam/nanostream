const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

const PORT = process.env.port || 5001;

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.get('/video', (req, res) => {
  var filePath = 'uploads/video1.mp4';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, '').split('-');
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total - 1;
    var chunksize = end - start + 1;
    var readStream = fs.createReadStream(filePath, { start: start, end: end });
    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    });
    readStream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type': 'audio/mpeg'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

// app.get("/video", (req, res) => {
//   res.writeHead(200, { "Content-type": "video/mp4" });
//   let rs = fs.createReadStream("./uploads/video1.mp4");
//   rs.pipe(res);
// });

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
