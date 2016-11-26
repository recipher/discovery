module.exports = function() {
  var services = {};

  return {
    register: function(service, host) {
      services[service] = host;
      return host;
    }

  , discover: function(service) {
      return services[service];
    }
  };
};