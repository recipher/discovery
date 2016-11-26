var sut = require('../lib');

describe('discovery', function() {
  
  it('should return host for service', function() {
    sut.register('user', 'https://user.api.recipher.co.uk');

    var host = sut.discover('user');

    host.should.equal('https://user.api.recipher.co.uk');
  });
    
  it('should return correct host for service after updating', function() {
    sut.register('user', 'https://user.api.recipher.co.uk');
    sut.register('user', 'https://users.api.recipher.co.uk');

    var host = sut.discover('user');

    host.should.equal('https://users.api.recipher.co.uk');
  });
  
});
