(function() {
  var Syntax;

  Syntax = (function() {
    function Syntax($http, $templateCache, syntaxService) {
      var link;
      link = function(scope, element, attrs) {
        var code, hasSrc, html, language, last, lineNumbers, newlineCharCode, sanitize, src;
        language = scope.language;
        lineNumbers = scope.lineNumbers !== 'false';
        src = scope.src;
        hasSrc = src != null;
        sanitize = function(input) {
          return input.replace(/</gm, '&lt;').replace(/>/gm, '&gt;').replace(/\t/gm, '  ');
        };
        if (hasSrc) {
          return $http.get(src, {
            cache: $templateCache
          }).success(function(response) {
            var code, comment, getComment, html, includeFilename, isCoffeeScript;
            includeFilename = scope.includeFilename !== 'false';
            isCoffeeScript = src.indexOf('.coffee') !== -1;
            if (includeFilename) {
              getComment = function(src) {
                if (isCoffeeScript) {
                  return "# " + src;
                }
                if (src.indexOf('.js') !== -1) {
                  return "// " + src;
                }
                if (src.indexOf('.html') !== -1) {
                  return "<!-- " + src + " -->";
                }
                return '';
              };
              comment = getComment(src);
              if (comment !== '') {
                response = ("" + comment + "\n") + response;
              }
            }
            code = sanitize(response);
            html = syntaxService.highlight(code, language, lineNumbers);
            return element.html(html);
          });
        }
        code = sanitize(element.html());
        newlineCharCode = '\n'.charCodeAt(0);
        while (code.charCodeAt(0) === newlineCharCode) {
          code = code.substr(1);
        }
        last = code.length - 1;
        while (code.charCodeAt(last) === newlineCharCode) {
          code = code.substr(0, last);
        }
        html = syntaxService.highlight(code, language, lineNumbers);
        return element.html(html);
      };
      return {
        link: link,
        replace: true,
        restrict: 'E',
        scope: {
          includeFilename: '@',
          language: '@',
          lineNumbers: '@',
          src: '@'
        }
      };
    }

    return Syntax;

  })();

  angular.module('app').directive('syntax', ['$http', '$templateCache', 'syntaxService', Syntax]);

}).call(this);

/*
//# sourceMappingURL=syntax.js.map
*/
