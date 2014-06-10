(function() {
  var ToExtension;

  ToExtension = (function() {
    function ToExtension() {
      return function(script, ext) {
        var extensionStart, newScript;
        extensionStart = script.lastIndexOf('.');
        return newScript = script.slice(0, +(extensionStart - 1) + 1 || 9e9) + ext;
      };
    }

    return ToExtension;

  })();

  angular.module('app').filter('toExtension', [ToExtension]);

}).call(this);

/*
//# sourceMappingURL=toExtension.js.map
*/
