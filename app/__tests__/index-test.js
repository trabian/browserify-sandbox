var assert = require('assert');

describe('The entry point', function() {

  it('should expose someVar', function() {
    var entry = require('../index');
    assert(entry.someVar === 'someVal');
  });

  it('should expose helper', function() {
    var entry = require('../index');
    assert(entry.helper === 'helper.js');
  });

});
