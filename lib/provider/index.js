var configuration = require('@recipher/configuration')
  , provider = configuration('provider:discovery') || 'etcd';

module.exports = require('./' + provider)();