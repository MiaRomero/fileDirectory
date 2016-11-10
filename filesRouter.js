const Router = require('express').Router;
var filesRouter = new Router();
const bodyParser = require('body-parser').json();
const fs = require('fs');

function list(start) {
  fs.readdir(start, (err, files) => {
    for(var i = 0; i < files.length; i++) {
      console.log(start + files[i]);
      var path = start + files[i];
    }
    return files;
  })

}

filesRouter.get('/files', (req, res) => {
  var fileArray = list('/');
  res.status(200).json(fileArray);
});

module.exports = exports = filesRouter;
