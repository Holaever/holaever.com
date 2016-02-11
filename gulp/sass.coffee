###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

require 'coffee-script/register'

cfg          = require('../config.json')
gulp         = require('gulp')
$            = require('gulp-load-plugins')()
run_sequence = require('run-sequence')
clp          = require('./clp.coffee')

sass_opts = {
  "errLogToConsole": true,
  "outputStyle": "compressed",
  "precision": 8
}

# With in-memory file cache. If a file has already passed through on
# the last run it will not be passed downstream. This means you only
# process what you need and save time + resources.
gulp.task 'sass', (cb) ->
  gulp.src(
    cfg.path.dev.sass.root + '**/*.scss'
  ).pipe(
    $.changed(cfg.path.dest.css.root)
  ).pipe(
    $.cached('holaever_sass')
  ).pipe(
    $.plumber()
  ).pipe(
    $.sass(sass_opts)
  ).pipe(
    gulp.dest(cfg.path.dest.css.root)
  ).pipe(
    $['if'](clp.csso, $.csso())
  ).pipe(
    gulp.dest(cfg.path.dest.css.root)
  ).pipe $['if'](clp.notify, $.notify(cfg.message.sass))
