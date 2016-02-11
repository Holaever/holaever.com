###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg    = require('../config.json')
gulp   = require('gulp')
bs     = require('browser-sync')
reload = bs.reload
stream = bs.stream
$      = require('gulp-load-plugins')()

gulp.task 'changed:html', ->
  gulp.src('*.html', cwd: cfg.path.root).pipe reload({stream: true})

gulp.task 'changed:css', ->
  gulp.src('**/*.css', cwd: cfg.path.dest.css.root).pipe reload({stream: false})

gulp.task 'changed:js', ->
  gulp.src('**/*.js', cwd: cfg.path.dest.javascript.root).pipe reload({stream: true})
