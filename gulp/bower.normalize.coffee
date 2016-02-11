###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg   = require('../config.json')
gulp  = require('gulp')
bower = require('main-bower-files')
$     = require('gulp-load-plugins')()

gulp.task 'bowernmiz', ->
  gulp
  .src(bower(), base: './bower_components')
  .pipe($.bowerNormalize(
    bowerJson: './bower.json'
    flatten: false
  ))
  .pipe gulp.dest('./public/vendor')
