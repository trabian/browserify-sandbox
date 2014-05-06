var assert = require('assert');

var entry = require('../index');

describe('The entry point', function() {

  it('should expose someVar', function() {
    assert(entry.someVar === 'someVal');
  });

  it('should expose helper', function() {
    assert(entry.helper === 'helper.js');
  });

  it('should be able to pull from another module', function() {
    console.warn('myPath', entry.core.myPath);
    assert(entry.core.myPath === 'trabian-webapp-core/index.coffee');
  });

});
