describe('The entry point', function() {

  it('should expose someVar', function() {
    var entry = require('../index');
    assert(entry.someVar === 'someVal');
  });

});
