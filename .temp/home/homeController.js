(function() {
  var Home;

  Home = (function() {
    function Home($log, scriptService) {
      var script, scripts;
      scripts = scriptService.get();
      this.scripts = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = scripts.length; _i < _len; _i++) {
          script = scripts[_i];
          if (script.indexOf('/vendor/') !== 0) {
            _results.push(script);
          }
        }
        return _results;
      })();
    }

    return Home;

  })();

  angular.module('app').controller('homeController', ['$log', 'scriptService', Home]);

}).call(this);

/*
//# sourceMappingURL=homeController.js.map
*/
