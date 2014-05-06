(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  someVar: 'someVal',
  helper: require('./lib/helper'),
  coffeeHelper: require('./lib/coffee-helper'),
  core: require('trabian-webapp-core')
};


},{"./lib/coffee-helper":2,"./lib/helper":3,"trabian-webapp-core":4}],2:[function(require,module,exports){
module.exports = 'coffee-helper.coffee';


},{}],3:[function(require,module,exports){
module.exports = 'helper.js';

},{}],4:[function(require,module,exports){
module.exports = {
  myPath: 'trabian-webapp-core/index.coffee'
};


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWF0dGRlYW4vZGV2L2xlYXJuaW5nL2Jyb3dzZXJpZnl2Mi9zYW5kYm94L25vZGVfbW9kdWxlcy90cmFiaWFuLXdlYmFwcC1jb3JlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dGRlYW4vZGV2L2xlYXJuaW5nL2Jyb3dzZXJpZnl2Mi9zYW5kYm94L2FwcC9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvbWF0dGRlYW4vZGV2L2xlYXJuaW5nL2Jyb3dzZXJpZnl2Mi9zYW5kYm94L2FwcC9saWIvY29mZmVlLWhlbHBlci5jb2ZmZWUiLCIvVXNlcnMvbWF0dGRlYW4vZGV2L2xlYXJuaW5nL2Jyb3dzZXJpZnl2Mi9zYW5kYm94L2FwcC9saWIvaGVscGVyLmpzIiwiL1VzZXJzL21hdHRkZWFuL2Rldi9sZWFybmluZy9icm93c2VyaWZ5djIvc2FuZGJveC9ub2RlX21vZHVsZXMvdHJhYmlhbi13ZWJhcHAtY29yZS9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUNFO0FBQUEsRUFBQSxPQUFBLEVBQVMsU0FBVDtBQUFBLEVBQ0EsTUFBQSxFQUFRLE9BQUEsQ0FBUSxjQUFSLENBRFI7QUFBQSxFQUVBLFlBQUEsRUFBYyxPQUFBLENBQVEscUJBQVIsQ0FGZDtBQUFBLEVBR0EsSUFBQSxFQUFNLE9BQUEsQ0FBUSxNQUFSLENBSE47Q0FERixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsc0JBQWpCLENBQUE7Ozs7QUNBQTtBQUNBOztBQ0RBLE1BQU0sQ0FBQyxPQUFQLEdBRUU7QUFBQSxFQUFBLE1BQUEsRUFBUSxrQ0FBUjtDQUZGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID1cbiAgc29tZVZhcjogJ3NvbWVWYWwnXG4gIGhlbHBlcjogcmVxdWlyZSAnLi9saWIvaGVscGVyJ1xuICBjb2ZmZWVIZWxwZXI6IHJlcXVpcmUgJy4vbGliL2NvZmZlZS1oZWxwZXInXG4gIGNvcmU6IHJlcXVpcmUgJ2NvcmUnXG4iLCJtb2R1bGUuZXhwb3J0cyA9ICdjb2ZmZWUtaGVscGVyLmNvZmZlZSdcbiIsIm1vZHVsZS5leHBvcnRzID0gJ2hlbHBlci5qcyc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG5cbiAgbXlQYXRoOiAndHJhYmlhbi13ZWJhcHAtY29yZS9pbmRleC5jb2ZmZWUnXG4iXX0=
