var sut = function(discover) {
  return proxyquire('../lib/discover', { './provider': { discover: discover }});
};

describe('discover', function() {
  
  it('should return null host for unknown service', function() {
    var discover = sinon.stub()
      , host = sut(discover)('user');

    should.not.exist(host);
  });
  
  it('should discover using provider', function() {
    var discover = sinon.stub()
      , host = sut(discover)('user');

    discover.should.be.called;    
  });
	
});
