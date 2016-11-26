var should = require('chai').should()
  , sut = require('../lib').register;
  
describe('register', function() {
    
  it('should return host', function() {
    var host = sut('user', 'https://user.api.recipher.co.uk');
    host.should.equal('https://user.api.recipher.co.uk');
  });
  
});
