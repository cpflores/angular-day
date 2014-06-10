(function() {
  var ReportCardInterceptorConfig;

  ReportCardInterceptorConfig = (function() {
    function ReportCardInterceptorConfig($httpProvider) {
      $httpProvider.interceptors.push('ReportCardInterceptor');
    }

    return ReportCardInterceptorConfig;

  })();

  angular.module('app').config(['$httpProvider', ReportCardInterceptorConfig]);

}).call(this);

/*
//# sourceMappingURL=reportCardInterceptorConfig.js.map
*/
