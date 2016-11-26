## @recipher/discovery

Service discovery.

### Usage

To register services:

```
var register = require('@recipher/discovery').register;

register('user', 'https://users.api.recipher.co.uk');
```

To discover services:

```
var discover = require('@recipher/discovery').discover;

var host = discover('user');
```
