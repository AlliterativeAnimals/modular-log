angular.module("aanimals.services.modular-log", []).
    factory("ModularLog", function() {
        return function(label) {
            var _label = label + ": ";

            return function(message, level) {
                // If no console, can't log anything.
                if (window.console) {
                    // If level not defined, use 'console.log'
                    if (!level) {
                        level = "log";
                    }
                    // Why are you logging functions? But okay.
                    if (typeof message === "function") {
                        message = message + "";
                    }
                    // Convert objects to JSON.
                    if (typeof message === "object") {
                        message = JSON.stringify(message);
                    }

                    if (typeof window.console[level] === "function") {
                        // Try and log to the given custom log level
                        window.console[level](_label + message);
                    } else if (typeof window.console.log === "function") {
                        // If no custom log, just log to 'console.log'
                        window.console.log(level.toUpperCase() + " " + _label + message);
                    }
                }
            };
        };
    });
