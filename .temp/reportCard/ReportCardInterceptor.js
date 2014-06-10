(function() {
  var ReportCardInterceptor;

  ReportCardInterceptor = (function() {
    function ReportCardInterceptor() {
      return {
        response: function(response) {
          var gravatar, isMatch, url;
          url = response.config.url;
          isMatch = !!url.match(/osrc.dfm.io/);
          if (isMatch) {
            gravatar = response.data.gravatar;
            response.data.gravatar = "https://secure.gravatar.com/avatar/" + gravatar + "?s=220&d=https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png";
          }
          return response;
        }
      };
    }

    return ReportCardInterceptor;

  })();

  angular.module('app').factory('ReportCardInterceptor', [ReportCardInterceptor]);

}).call(this);

/*
//# sourceMappingURL=ReportCardInterceptor.js.map
*/
