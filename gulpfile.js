var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var karma = require('karma').server;
var _ = require('underscore');
var glob = require('glob');

var browserifyOptions = {
  extensions: ['.coffee']
};

gulp.task('build-test', function() {

  var testFiles = glob.sync('./app/**/__tests__/*.js');

  var opts = _({
    entries: testFiles
  }).defaults(browserifyOptions);

  var bundler = watchify(opts);

  var rebundle = function() {

    bundler.bundle()

    .on('error', function(err) {
      console.warn('error', err);
    })

    .pipe(source('tests.js'))
    .pipe(gulp.dest('./dist'))

  };

  bundler.on('update', rebundle);

  rebundle()

  // console.warn('testFiles', testFiles);

});

gulp.task('karma', function() {

  karma.start({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    autoWatch: true,
    files: [
      'dist/tests.js'
    ],
    singleRun: false
  });

});

gulp.task('test', ['build-test', 'karma']);

gulp.task('watch', function() {

  var opts = _({
    entries: ['./app/index.coffee']
  }).defaults(browserifyOptions);

  var bundler = watchify(opts);

  var rebundle = function() {

    bundler.bundle()

    .on('error', function(err) {
      console.warn('error', err);
    })

    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))

  };

  bundler.on('update', rebundle);

  rebundle()

});
