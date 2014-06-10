(function() {
  var ScreencastsRoutes;

  ScreencastsRoutes = (function() {
    function ScreencastsRoutes($routeProvider) {
      $routeProvider.when('/screencasts', {
        caption: 'Screencasts',
        controller: 'screencastsController',
        controllerAs: 'controller',
        templateUrl: '/screencasts/screencasts.html'
      });
    }

    return ScreencastsRoutes;

  })();

  angular.module('app').config(['$routeProvider', ScreencastsRoutes]);

}).call(this);

/*
//# sourceMappingURL=screencastsRoutes.js.map
*/
