var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var karma = require('karma').server;
var _ = require('underscore');

var browserifyOptions = {
  extensions: ['.coffee']
};

gulp.task('test', function() {

  karma.start({
    frameworks: ['mocha', 'browserify'],
    browsers: ['PhantomJS'],
    files: [
      'app/**/__tests__/*.js'
    ],
    preprocessors: {
      'app/**/__tests__/*.js': ['browserify']
    },
    singleRun: true,

    browserify: _({
      watch: true
    }).defaults(browserifyOptions)

  });

});

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
