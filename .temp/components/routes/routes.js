(function() {
  var Routes;

  Routes = (function() {
    function Routes(routesService) {
      var link;
      link = function(scope, element, attrs) {
        return scope.routes = routesService.routes;
      };
      return {
        link: link,
        replace: true,
        restrict: 'E',
        templateUrl: '/components/routes/routes.html'
      };
    }

    return Routes;

  })();

  angular.module('app').directive('routes', ['routesService', Routes]);

}).call(this);

/*
//# sourceMappingURL=routes.js.map
*/
