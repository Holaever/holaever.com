###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
run_sequence = require('run-sequence').use(gulp)
$ = require('gulp-load-plugins')()

gulp.task 'watch', ->
  gulp.watch '*.html', { cwd: cfg.path.root }, [ 'changed:html' ]
  gulp.watch '**/*.+(sass|scss)', { cwd: cfg.path.dev.sass.root }, [ 'sass' ]
  gulp.watch '**/*.css', { cwd: cfg.path.dest.css.root }, [ 'changed:css' ]
  gulp.watch '**/*.js', { cwd: cfg.path.dev.script.root }, [ 'react' ]
  gulp.watch '**/*.coffee', { cwd: cfg.path.dev.script.root }, [ 'cs' ]
  gulp.watch '**/*.js', { cwd: cfg.path.dest.javascript.root }, [ 'changed:js' ]
  return
