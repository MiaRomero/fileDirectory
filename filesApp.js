const angular = require('angular');
const filesApp = angular.module('filesApp', []);
const fs = require('fs');

filesApp.factory('listResource', function() {
  var Resource = function(files) {
    this.files = files;
  }

  Resource.prototype.getNextLevel = function(startPath) {
    fs.readdir(startPath, (err, files) => {
      for(var i = 0; i < files.length; i++) {
        console.log(startPath + files[i]);
        var path = startPath + files[i];
        console.log(fs.statSync(path).isDirectory());
      }
    })
  };

  return Resource;
});

filesApp.controller('listController', [listResource], function(Resource) {
  this.files = [];
  var resource = new Resource(this.files);

  this.getNextLevel = resource.getNextLevel.bind(resource);
});
