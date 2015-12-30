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

gulp.task 'js_changed', ->
  gulp.src('**/*.js', cwd: cfg.path.dest.javascript.root).pipe reload(stream: true)
