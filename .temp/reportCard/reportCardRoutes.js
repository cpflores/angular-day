(function() {
  var ReportCardRoutes;

  ReportCardRoutes = (function() {
    function ReportCardRoutes($routeProvider) {
      $routeProvider.when('/reportcard', {
        caption: 'Your Open Source Report Card',
        controller: 'reportCardController',
        controllerAs: 'controller',
        templateUrl: '/reportCard/report-card.html'
      });
    }

    return ReportCardRoutes;

  })();

  angular.module('app').config(['$routeProvider', ReportCardRoutes]);

}).call(this);

/*
//# sourceMappingURL=reportCardRoutes.js.map
*/
