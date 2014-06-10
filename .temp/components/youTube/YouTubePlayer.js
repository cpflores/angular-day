(function() {
  var YouTubePlayer;

  YouTubePlayer = (function() {
    function YouTubePlayer($rootScope, $window, $log) {
      var YouTubePlayerInstance, apiReady, createPlayer, onApiReady, players;
      apiReady = false;
      players = {};
      onApiReady = (function(_this) {
        return function() {
          var playerId, videoId;
          apiReady = true;
          for (playerId in players) {
            videoId = players[playerId];
            $rootScope.$broadcast(playerId);
          }
          return players = null;
        };
      })(this);
      $window.onYouTubeIframeAPIReady = onApiReady;
      if (!apiReady && $window.YT && $window.YT.loaded) {
        onApiReady();
      }
      createPlayer = function(playerId, videoId, playlistId, playerHeight, playerWidth) {
        var options, player;
        options = {
          height: playerHeight,
          width: playerWidth,
          videoId: videoId
        };
        if (playlistId) {
          options.playerVars = {
            listType: 'playlist',
            list: playlistId
          };
        }
        return player = new YT.Player(playerId, options);
      };
      return YouTubePlayerInstance = (function() {
        function YouTubePlayerInstance(playerId, videoId, playlistId, playerHeight, playerWidth) {
          var deregister, getPlayer;
          if (playerHeight == null) {
            playerHeight = '390';
          }
          if (playerWidth == null) {
            playerWidth = '640';
          }
          getPlayer = function() {
            var player;
            return player = createPlayer(playerId, videoId, playlistId, playerHeight, playerWidth);
          };
          if (apiReady) {
            this.player = getPlayer();
          } else {
            players[playerId] = videoId;
            deregister = $rootScope.$on(playerId, (function(_this) {
              return function(e) {
                _this.player = getPlayer();
                return deregister();
              };
            })(this));
          }
          this.destroy = function() {
            return this.player.destroy();
          };
        }

        return YouTubePlayerInstance;

      })();
    }

    return YouTubePlayer;

  })();

  angular.module('app').factory('YouTubePlayer', ['$rootScope', '$window', '$log', YouTubePlayer]);

}).call(this);

/*
//# sourceMappingURL=YouTubePlayer.js.map
*/
