describe('Requiring nested files', function () {

  it('should not cause an error', function() {
    var a = require('../index');
    console.warn('a', a);
  });

});
