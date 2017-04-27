var fs = require('fs');
var ncp = require('ncp');
var pug = require('pug');
var path = require('path');
var rimraf = require('rimraf');

var publicPath = path.join(process.cwd(), 'public');
var distPath = process.env.DIST_PATH || path.join(process.cwd(), 'dist');
var indexPath = path.join(process.cwd(), 'views', 'index.pug');
var destIndexPath = path.join(distPath, 'index.html');

module.exports = function(callback) {
  rimraf(distPath, function() {
    fs.mkdirSync(distPath);

    ncp(publicPath, distPath, function(err) {
      if (err) {
        return console.error(err);
      }

      var fn = pug.compileFile(indexPath, {
        pretty: true
      });

      var html = fn({
        app_scripts: "\n    <script src='js/plugins.js'></script>\n    <script src='js/app.js'></script>",
        app_stylesheets: "\n    <link rel='stylesheet' href='css/main.css' />"
      });

      fs.writeFileSync(destIndexPath, html + '\n');

      if (callback) callback();
    })
  });
};
