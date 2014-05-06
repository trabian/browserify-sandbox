var assert = require('assert');

describe('Requiring nested files', function () {

  it('should not cause an error', function() {
    var a = require('../index');
    assert(a.coffeeHelper === 'coffee-helper.coffee');
  });

});
