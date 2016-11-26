var sut = require('../lib');

describe('index', function() {
  
  it('should have discover function', function() {
    sut.discover.should.be.a.function;
  });
  
  it('should have register function', function() {
    sut.register.should.be.a.function;
  });
  
});
