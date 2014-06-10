(function() {
  var ReportCard,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ReportCard = (function() {
    function ReportCard($http) {
      this.$http = $http;
      this.get = __bind(this.get, this);
    }

    ReportCard.prototype.get = function(username) {
      return this.$http.get("http://osrc.dfm.io/" + username + ".json").then(function(results) {
        return results.data;
      });
    };

    return ReportCard;

  })();

  angular.module('app').service('reportCardService', ['$http', ReportCard]);

}).call(this);

/*
//# sourceMappingURL=reportCardService.js.map
*/
