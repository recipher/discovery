var provider = require('./provider');

module.exports = function(service) {
  if (service == null || service === '') throw new Error('Service is undefined');

  return provider.discover(service);
};