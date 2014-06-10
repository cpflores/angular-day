(function() {
  var StripUsername;

  StripUsername = (function() {
    function StripUsername() {
      return function(repo, username) {
        var startsWithUsername, strippedRepo;
        startsWithUsername = repo.toLowerCase().indexOf(username.toLowerCase()) === 0;
        if (!startsWithUsername) {
          return repo;
        }
        return strippedRepo = repo.substr(username.length + 1);
      };
    }

    return StripUsername;

  })();

  angular.module('app').filter('stripUsername', [StripUsername]);

}).call(this);

/*
//# sourceMappingURL=stripUsername.js.map
*/
