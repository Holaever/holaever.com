###
# Author:
# Last Update (author):
###

'use strict'

gulp = require('gulp')
cfg = require('../config.json')
fs = require('fs-extra')
_ = require('lodash')
mrg = require('merge-stream')
isDir = require('is-directory')
run_sequence = require('run-sequence')
$ = require('gulp-load-plugins')()

convertTo_Obj = (filter) ->
  obj = {}
  if _.isArray(filter)
    _.forEach filter, (itm, idx, arry) ->
      obj[itm] = idx
  else if _.isString(filter)
    obj[filter] = 0
  obj

$filter = (arr, filter) ->
  exclude = (item) ->
    !(item of convertTo_Obj(filter))
  _.filter arr, exclude

readDirFolderCache = (dirPath) ->
  list = fs.readdirSync(dirPath)
  folders = []

  deal = (itm, idx, arry) ->
    if isDir.sync(dirPath + itm)
      folders.push itm
    return

  _.forEach list, deal
  folders

gulp.task 'copy:img', ->
  gulp.src(cfg.path.dev.img.root + '**/*').pipe gulp.dest(cfg.path.dest.img.root)
  return

gulp.task 'copy:font', ->
  gulp.src(cfg.path.dev.font.root + '**/*').pipe gulp.dest(cfg.path.dest.font.root)
  return

gulp.task 'copy:js', ->
  copyScriptOpts =
    baseUrl: 'dev/script/'
    nottraversal: [
      'private'
      'framework'
    ]
  dirPath = process.cwd() + '/' + copyScriptOpts.baseUrl
  dirCache = readDirFolderCache(dirPath)

  traverse_scope = ->
    $filter dirCache, copyScriptOpts.nottraversal

  _.forEach traverse_scope(dirPath), (itm, idx, arry) ->
    gulp.src(copyScriptOpts.baseUrl + itm + '/**/*.js', dot: true).pipe gulp.dest(cfg.path.dest.root + itm)
    return
  return

gulp.task 'copy', (cb) ->
  run_sequence [
    'copy:img'
    'copy:font'
    'copy:js'
  ], cb
