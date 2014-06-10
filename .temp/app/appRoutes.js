(function() {
  var AppRoutes;

  AppRoutes = (function() {
    function AppRoutes($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }

    return AppRoutes;

  })();

  angular.module('app').config(['$routeProvider', AppRoutes]);

}).call(this);

/*
//# sourceMappingURL=appRoutes.js.map
*/
