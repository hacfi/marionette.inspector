

// @private
// Watch set of properties by using timers, without adding getters/setters to the watched object and
// thus without causing possible side effects; needed when watching DOM objects properties to prevent
// the browser from stopping recognizing the changes.
var stealthOnSetted = function(object, property, callback) {
    var newValue = object[property];
    return setInterval(function() {
        var oldValue = newValue;
        newValue = object[property];
        if (newValue !== oldValue) callback(newValue);
    }, 50);
};