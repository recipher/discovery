var provider = require('./provider');

module.exports = function(service, host) {
  if (service == null || service === '') throw new Error('Service is undefined');
  if (host == null || host === '') throw new Error('Host is undefined');

  return provider.register(service, host);
};