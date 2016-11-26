var sut = require('../../lib/provider/null')();
  
describe('null provider', function() {
  it('should not return host for unknown service', function() {
    var host = sut.discover('user');
    
    should.not.exist(host);
  });

  it('should return host for service', function() {
    sut.register('user', 'https://user.api.recipher.co.uk');

    var host = sut.discover('user');
    
    host.should.equal('https://user.api.recipher.co.uk');
  });
  
});
