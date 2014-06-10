(function() {
  var Routes;

  Routes = (function() {
    function Routes($route) {
      var k, route, v, _ref;
      this.routes = {};
      _ref = $route.routes;
      for (k in _ref) {
        v = _ref[k];
        if (k === 'null') {
          continue;
        }
        if (k === '') {
          continue;
        }
        k = k.substr(-1) === '/' && k.length > 1 ? k.substr(0, k.length - 1) : k;
        if (!v.caption) {
          continue;
        }
        route = this.routes[k];
        if (route !== -1) {
          this.routes[k] = v.caption;
        }
      }
    }

    return Routes;

  })();

  angular.module('app').service('routesService', ['$route', Routes]);

}).call(this);

/*
//# sourceMappingURL=routesService.js.map
*/
