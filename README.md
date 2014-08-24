ngModularLog
===========

Simple angular module to prefix log messages with the
module/state they came from

### Installation

* `bower install ngModularLog`
* add `ngModularLog.js` to your page

### Usage

```js
angular.
    // Require the module in your script
    module('your.module', ['aanimals.services.modularlog']).
    // Inject it into your controller/service/etc
    factory("MyFactory", function (ModularLog) {
        // Instantiate it with a human readable label
        var log = ModularLog("MyFactory");

        // Use it! Log a message with an optional log level.
        log("Loaded successfully", "info");
    })
```

All log levels that are available on `console.` can be used.
Simply pass them as the second argument.

### Possible future expansion

* Handling non-scalar types gracefully
* Nested levels
* `log.warn()` notation
* `log.warn(x, y, z)` notation
* Log styling
