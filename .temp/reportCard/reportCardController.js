(function() {
  var ReportCard;

  ReportCard = (function() {
    function ReportCard(reportCardService) {
      this.getReportCard = function(username) {
        return reportCardService.get(username).then((function(_this) {
          return function(results) {
            return _this.reportCard = results;
          };
        })(this));
      };
    }

    return ReportCard;

  })();

  angular.module('app').controller('reportCardController', ['reportCardService', ReportCard]);

}).call(this);

/*
//# sourceMappingURL=reportCardController.js.map
*/
