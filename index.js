const express = require('express');
cosnt app = express();

const angular = require('angular');
const filesApp = angular.module('filesApp', ['ngRoute']);

const fs = require('fs');


filesApp.config(function($routeProvider) {
  $routeProvider

    .when('/files', {
      templateUrl: 'views/index.html',
      controller: 'listController'
    })
    .when('/hello', {
      templateUrl: 'views/hello.html',
      //controller: ''
    })
    .when('/proc', {
      templateUrl: 'views/proc.html',
      controller: 'procController'
    });
});

filesApp.controller('listController', [listResource], function(Resource) {
  this.files = [];

  this.getNextLevel = function(startPath) {
      fs.readdir(startPath, (err, files) => {
        for(var i = 0; i < files.length; i++) {
          console.log(startPath + files[i]);
          var path = startPath + files[i];
          console.log(fs.statSync(path).isDirectory());
        }
      });
    };
});

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
