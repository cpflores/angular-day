(function() {
  var HomeRoutes;

  HomeRoutes = (function() {
    function HomeRoutes($routeProvider) {
      $routeProvider.when('/', {
        caption: 'Home',
        controller: 'homeController',
        controllerAs: 'controller',
        templateUrl: '/home/home.html'
      });
    }

    return HomeRoutes;

  })();

  angular.module('app').config(['$routeProvider', HomeRoutes]);

}).call(this);

/*
//# sourceMappingURL=homeRoutes.js.map
*/
