var Etcd = require('node-etcd')
  , configuration = require('@recipher/configuration');

module.exports = function() {
  var etcd = new Etcd(configuration('etcd:host'));

  return {
    register: function(service, host) {

    }

  , discover: function(service) {
      
    }
  };
};