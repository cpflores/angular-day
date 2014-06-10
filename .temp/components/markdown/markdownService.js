(function() {
  var Markdown;

  Markdown = (function() {
    function Markdown($window) {
      this.$window = $window;
      this.converter = new this.$window.Showdown.converter();
    }

    Markdown.prototype.convert = function(content) {
      var html;
      return html = this.converter.makeHtml(content);
    };

    return Markdown;

  })();

  angular.module('app').service('markdownService', ['$window', Markdown]);

}).call(this);

/*
//# sourceMappingURL=markdownService.js.map
*/
