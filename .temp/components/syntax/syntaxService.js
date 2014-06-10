(function() {
  var Syntax;

  Syntax = (function() {
    function Syntax($window) {
      this.process = $window.prettyPrintOne;
    }

    Syntax.prototype.highlight = function(code, language, lineNumbers) {
      var html, syntax;
      if (lineNumbers == null) {
        lineNumbers = true;
      }
      syntax = this.process(code, language, lineNumbers);
      return html = "<pre class=\"prettyprint\"><code>" + syntax + "</code></pre>";
    };

    return Syntax;

  })();

  angular.module('app').service('syntaxService', ['$window', Syntax]);

}).call(this);

/*
//# sourceMappingURL=syntaxService.js.map
*/
