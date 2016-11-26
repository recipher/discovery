var sut = function(register) {
  return proxyquire('../lib/register', { './provider': { register: register }});
};

describe('register', function() {
 
  it('should register using provider', function() {
    var register = sinon.stub()
      , host = sut(register)('user', 'https://user.api.recipher.co.uk');

    register.should.be.calledWith('user', 'https://user.api.recipher.co.uk');    
  });
 
  it('should throw if service is undefined', function() {
    (function() {
      sut(sinon.stub())()
    }).should.throw(Error);
  });
 
  it('should throw if service is empty', function() {
    (function() {
      sut(sinon.stub())('')
    }).should.throw(Error);
  });
 
  it('should throw if host is undefined', function() {
    (function() {
      sut(sinon.stub())('user')
    }).should.throw(Error);
  });
 
  it('should throw if host is empty', function() {
    (function() {
      sut(sinon.stub())('user', '')
    }).should.throw(Error);
  });

});
