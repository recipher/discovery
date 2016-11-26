var provider = require('./provider');

module.exports = function(service) {
  return provider.discover(service);
};