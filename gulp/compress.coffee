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
clp = require('./clp.coffee')
keys = require('../key/tinypng.key.json')

$ = require('gulp-load-plugins')(
  rename:
    'gulp-minify-css': 'minifyCSS'
    'gulp-gzip': 'gziper'
)

gzip_opts =  {
  "append": true,
  "threshold": "1kb",
  "gzipOptions": {
    "level": 9,
    "memLevel": 1
  }
}

jsmin = lazypipe().pipe($.uglify).pipe(->
  $['if'] clp.notify, $.notify(cfg.message.jsmin)
)

gulp.task 'compress:js', ->

gulp.task 'compress:css', ->

gulp.task 'compress:img', ->

gulp.task 'gzip', ->
  gulp
  .src(cfg.path.dest.root + '**/*.+(css|js|png|jpg|jpeg|gif|svg|svgz)')
  .pipe $.gziper gzip_opts
  .pipe gulp.dest cfg.path.dest.root

gulp.task 'compress', (cb) ->
  run_sequence [
    'compress:js'
    'compress:css'
    'compress:img'
  ], 'gzip', cb
