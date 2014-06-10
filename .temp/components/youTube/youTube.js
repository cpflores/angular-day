(function() {
  var YouTube;

  YouTube = (function() {
    function YouTube($log, YouTubePlayer) {
      var uniqueId, uniqueIdPrefix;
      uniqueIdPrefix = 'you-tube-player-';
      uniqueId = 0;
      return {
        compile: function(tElement, tAttrs, transclude) {
          var id;
          id = tAttrs.id;
          if (!id) {
            id = "" + uniqueIdPrefix + uniqueId;
            uniqueId += 1;
            tElement.attr('id', id);
          }
          return function(scope, element, attrs) {
            var player;
            player = new YouTubePlayer(id, scope.video, scope.playlist);
            return scope.$on('$destroy', function() {
              return player.destroy();
            });
          };
        },
        replace: true,
        restrict: 'E',
        scope: {
          playlist: '@',
          video: '@'
        }
      };
    }

    return YouTube;

  })();

  angular.module('app').directive('youTube', ['$log', 'YouTubePlayer', YouTube]);

}).call(this);

/*
//# sourceMappingURL=youTube.js.map
*/
