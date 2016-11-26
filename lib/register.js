var provider = require('./provider');

module.exports = function(service, host) {
  return provider.register(service, host);
};