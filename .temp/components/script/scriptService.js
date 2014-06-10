(function() {
  var Script;

  Script = (function() {
    function Script($document, $location) {
      var doc, prefix, url;
      url = $location.$$absUrl;
      prefix = $location.$$protocol + '://' + $location.$$host + ':' + $location.$$port;
      doc = $document[0];
      this.add = function(url) {
        var firstScriptTag, scriptTags, tag;
        tag = doc.createElement('script');
        tag.src = url;
        scriptTags = doc.getElementsByTagName('script');
        firstScriptTag = scriptTags[0];
        return firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      };
      this.get = function() {
        var script, scriptTag, scriptTags, scripts, trimmedScript;
        scriptTags = doc.getElementsByTagName('script');
        return scripts = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = scriptTags.length; _i < _len; _i++) {
            scriptTag = scriptTags[_i];
            if (!scriptTag.src) {
              continue;
            }
            trimmedScript = scriptTag.src.replace(prefix, '');
            if (trimmedScript[0] !== '/') {
              continue;
            }
            _results.push(script = trimmedScript);
          }
          return _results;
        })();
      };
    }

    return Script;

  })();

  angular.module('app').service('scriptService', ['$document', '$location', Script]);

}).call(this);

/*
//# sourceMappingURL=scriptService.js.map
*/
