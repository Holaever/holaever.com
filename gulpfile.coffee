require 'coffee-script/register'

gulp = require('gulp')
nodemon = require('gulp-nodemon')
plumber = require('gulp-plumber')
livereload = require('gulp-livereload')
sass = require('gulp-sass')

gulp.task 'sass', ->
  gulp.src('./public/css/*.scss').pipe(plumber()).pipe(sass()).pipe(gulp.dest('./public/css')).pipe livereload()
  return

gulp.task 'watch', ->
  gulp.watch './public/css/*.scss', [ 'sass' ]
  return

gulp.task 'develop', ->
  livereload.listen()
  nodemon(
    script: 'app.coffee'
    ext: 'js coffee jade'
    stdout: false
  )
  .on 'readable', ->
      @stdout.on 'data', (chunk) ->
        if /^Express server listening on port/.test(chunk)
          livereload.changed __dirname
        return
      @stdout.pipe process.stdout
      @stderr.pipe process.stderr
    return
  return

gulp.task 'default', [
  'sass'
  'develop'
  'watch'
]
