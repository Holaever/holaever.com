###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

gulp = require('gulp')
s_prefix = 'sprite-'
_ = require('lodash')
$ = require('gulp-load-plugins')()
clp = require('./clp')
extend = require('xtend')
run_sequence = require('run-sequence')
merge = require('merge-stream')
cfg = require('../config.json')
order = cfg.sprite_order

# The custom of default option. More options, https://github.com/twolfson/gulp.spritesmith/blob/master/README.md#documentation
sprite_opts =
  engine: 'phantomjssmith'
  algorithm: 'binary-tree'
  algorithmOpts: sort: true
  cssFormat: 'css'
  cssOpts: cssSelector: (item) ->
    '.icon-' + item.name

_.forEach order, (val, idx, collection) ->
  gulp.task s_prefix + val, ->
    png_img_src = gulp.src([
      cfg.path.dev.img.root + val + '/*.png'
      '!' + cfg.path.dev.img.root + val + '/*.noo.png'
    ])
    jpg_img_src = gulp.src([
      cfg.path.dev.img.root + val + '/*.+(jpg|jpeg)'
      '!' + cfg.path.dev.img.root + val + '/*.+(noo.jpg|noo.jpeg)'
    ])
    png_sprite_data = png_img_src.pipe($.plumber()).pipe($.spritesmith(extend(sprite_opts,
      retinaSrcFilter: [ cfg.path.dev.img.root + val + '/*@2x.png' ]
      imgName: s_prefix + val + '.png'
      retinaImgName: s_prefix + val + '@2x.png'
      cssName: s_prefix + 'png-' + val + '.css'
      imgPath: 'img/sprites/sprite-' + val + '.png')))
    jpg_sprite_data = jpg_img_src.pipe($.plumber()).pipe($.spritesmith(extend(sprite_opts,
      retinaSrcFilter: [ cfg.path.dev.img.root + val + '/*@2x.jpg' ]
      imgName: s_prefix + val + '.jpg'
      retinaImgName: s_prefix + val + '@2x.jpg'
      cssName: s_prefix + 'jpg-' + val + '.css'
      imgPath: 'img/sprites/sprite-' + val + '.jpg')))
    png_sprite_data.img.pipe gulp.dest(cfg.path.dest.img.root + '/sprites')
    png_sprite_data.css.pipe($['if'](clp.csso, $.csso())).pipe gulp.dest(cfg.path.dest.css.root + '/theme')
    jpg_sprite_data.img.pipe gulp.dest(cfg.path.dest.img.root + '/sprites')
    jpg_sprite_data.css.pipe($['if'](clp.csso, $.csso())).pipe gulp.dest(cfg.path.dest.css.root + '/theme')
    merge png_img_src, jpg_img_src, png_sprite_data, jpg_sprite_data
  return

gulp.task 'nor-sprites', _.map(order, (val, idx, collection) ->
  s_prefix + val
)

gulp.task 'sprites', (cb) ->
  run_sequence [ 'nor-sprites' ], cb
