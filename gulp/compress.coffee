###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
lazypipe = require('lazypipe')
mrg = require('merge-stream')
run_sequence = require('run-sequence')
$ = require('gulp-load-plugins')(
  rename:
    'gulp-minify-css': 'minifyCSS'
    'gulp-gzip': 'gziper'
)
clp = require('./clp.coffee')
keys = require('../key/tinypng.key.json')

jsmin = lazypipe().pipe($.uglify).pipe(->
  $['if'] clp.notify, $.notify(cfg.message.jsmin)
)

gulp.task 'compress:js', ->

gulp.task 'compress:css', ->

gulp.task 'compress:img', ->

gulp.task 'gzip', ->
  gulp
  .src(cfg.path.dest.root + '**/*.+(css|js|png|jpg|jpeg|gif|svg|svgz)')
  .pipe($.gziper())
  .pipe gulp.dest(cfg.path.dest.root)

gulp.task 'compress', (cb) ->
  run_sequence [
    'compress:js'
    'compress:css'
    'compress:img'
  ], 'gzip', cb
