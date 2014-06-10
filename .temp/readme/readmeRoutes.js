(function() {
  var ReadmeRoutes;

  ReadmeRoutes = (function() {
    function ReadmeRoutes($routeProvider) {
      $routeProvider.when('/readme', {
        caption: 'Readme',
        controller: 'readmeController',
        controllerAs: 'controller',
        templateUrl: '/readme/readme.html'
      });
    }

    return ReadmeRoutes;

  })();

  angular.module('app').config(['$routeProvider', ReadmeRoutes]);

}).call(this);

/*
//# sourceMappingURL=readmeRoutes.js.map
*/
