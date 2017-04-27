var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var chokidar = require('chokidar');
var distUtils = require('./dist-utils');

var bundle = path.join(process.cwd(), 'tmp', 'bundle.js');
var src = path.join(process.cwd(), 'src');
var sass = path.join(process.cwd(), 'sass');
var modules = path.join(process.cwd(), 'views');
var server = path.join(process.cwd(), 'server');

var compiling = false;

chokidar.watch([
  bundle,
  src,
  sass,
  views,
  server
]).on('all', function(event, path) {
  if (compiling) {
    return;
  } else {
    compiling = true;
  }

  console.log('Creating distributable...');

  cp.exec('npm run bundle:client -s', function(error, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }

    distUtils(function() {
      compiling = false;
    });
  });
});