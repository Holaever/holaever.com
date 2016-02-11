###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
browserSync = require('browser-sync')
reload = browserSync.reload
$ = require('gulp-load-plugins')()

gulp.task 'css_changed', ->
  gulp.src('**/*.css', cwd: cfg.path.dest.css.root).pipe reload(stream: true)
