var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var karma = require('karma').server;

gulp.task('test', function() {

  karma.start({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    files: [
      'app/**/__tests__/*.js'
    ],
    singleRun: true
  });

});

gulp.task('watch', function() {

  var bundler = watchify('./app/index.js');

  var rebundle = function() {

    bundler.bundle()

    .on('error', function() {

    })

    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))

  };

  bundler.on('update', rebundle);

  rebundle()

});
