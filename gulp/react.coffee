###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
lazypipe = require('lazypipe')
run_sequence = require('run-sequence')
clp = require('./clp.coffee')
sizer = require('./size.coffee')
$ = require('gulp-load-plugins')()

gulp.task 'react', (cb) ->
  gulp.src(cfg.path.dev.script.root + '**/*.jsx')
  .pipe($.changed(cfg.path.dest.javascript.root))
  .pipe($.cached('jsx_hola'))
  .pipe($.plumber())
  .pipe($.react())
  .pipe(gulp.dest(cfg.path.dest.javascript.root))
  .pipe($['if'](clp.uglify, $.uglify(cfg.uglify_opts)))
  .pipe(gulp.dest(cfg.path.dest.javascript.root))
  .pipe(sizer.js_size())
  .pipe $['if'](clp.notify, $.notify(cfg.message.jsx))

gulp.task 'cs-react', (cb) ->
  gulp.src(cfg.path.dev.script.root + '**/*.cjsx')
  .pipe($.changed(cfg.path.dest.javascript.root))
  .pipe($.cached('cjsx_hola'))
  .pipe($.plumber())
  .pipe($.cjsx(cfg.cjsx_opts))
  .pipe(gulp.dest(cfg.path.dest.javascript.root))
  .pipe($['if'](clp.uglify, $.uglify(cfg.uglify_opts)))
  .pipe(gulp.dest(cfg.path.dest.javascript.root))
  .pipe(sizer.js_size())
  .pipe $['if'](clp.notify, $.notify(cfg.message.jsx))
