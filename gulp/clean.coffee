###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
$ = require('gulp-load-plugins')()
FF = require('node-find-folder')
_ = require('lodash')
del = require('del')
order = cfg.clean_order
cln_prefix = 'clean-'

_.forEach order, (item, index, list) ->
  gulp.task cln_prefix + item, (cb) ->
    rslt = new FF(item)
    _.forEach rslt, (itm, idx, lst) ->
      del itm
      return
    cb()
    return

gulp.task 'clean', _.map(order, (item, index) ->
  cln_prefix + item
)
