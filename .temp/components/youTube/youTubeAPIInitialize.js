(function() {
  var YouTubeInit;

  YouTubeInit = (function() {
    function YouTubeInit(scriptService) {
      scriptService.add('//www.youtube.com/iframe_api');
    }

    return YouTubeInit;

  })();

  angular.module('app').run(['scriptService', YouTubeInit]);

}).call(this);

/*
//# sourceMappingURL=youTubeAPIInitialize.js.map
*/
