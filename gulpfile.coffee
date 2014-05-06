gulp = require 'gulp'
gutil = require 'gulp-util'
karma = require('karma').server
glob = require 'glob'

bundle = require 'trabian-webapp-core/gulp/helpers/bundle'

gulp.task 'build:tests', ->

  bundle
    entries: glob.sync './app/**/__tests__/*.{js,coffee}'
    out: 'tests.js'
    watch: !! gutil.env.watch
    debug: true

gulp.task 'build:dist', ->

  bundle
    entries: ['./app/index.coffee']
    out: 'bundle.js'
    watch: !! gutil.env.watch
    debug: true

gulp.task 'test', ['build:tests'], ->

  watch = !! gutil.env.watch

  karma.start
    frameworks: ['mocha']
    browsers: ['PhantomJS']
    autoWatch: watch
    singleRun: not watch
    files: [
      'dist/tests.js'
    ]

gulp.task 'default', ['test']
