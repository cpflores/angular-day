(function() {
  var Markdown;

  Markdown = (function() {
    function Markdown(markdownService) {
      var link;
      link = function(scope, element, attrs) {
        var code, html;
        code = element.text();
        html = markdownService.convert(code);
        return element.html(html);
      };
      return {
        link: link,
        replace: true,
        restrict: 'E'
      };
    }

    return Markdown;

  })();

  angular.module('app').directive('markdown', ['markdownService', Markdown]);

}).call(this);

/*
//# sourceMappingURL=markdown.js.map
*/
