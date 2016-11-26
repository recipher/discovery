var should = require('chai').should()
  , sut = require('../lib').discover;
  
describe('discover', function() {
		
  it('should return host for service', function() {
    var host = sut('user');
    host.should.equal('');
  });
	
});
