angular.module('app')
.filter('truncate', function () {
  return function (text, characters, includeEllipsis) {
    return text.substr(0, characters) + (includeEllipsis ? '...' : '');
  };
});

angular.module('app')
.service('eventBriteService', function ($http) {
  // get all events
  this.list = function () {
    return $http.get('http://workshop-api-1.herokuapp.com/events.json')
    .then(function (result) {
      return result.data;
    });
  };

	// get one event
	this.get = function(id) {
		return $http.get('http://workshop-api-1.herokuapp.com/events/' + id + '.json')
		.then(function (result) {
			return result.data;
		});
	};

	this.delete = function(id) {
		return $http.delete('http://workshop-api-1.herokuapp.com/events/' + id + '.json')
		.then(function (result) {
			return result.data;
		});
	};
});

angular.module('app')
.controller('eventBriteController', function ($scope, $log, eventBriteService, $q, $timeout) {
  $scope.greeting = 'Hello Angularians';

  var Guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r, v;
    r = Math.random() * 16 | 0;
    v = (c === 'x' ? r : r & 0x3 | 0x8);
    return v.toString(16);
  })};

  var myPromise = function () {
    var deferred = $q.defer();

    $timeout(function () {
      deferred.resolve('DONE');
    }, 2000);

    return deferred.promise;
  };

var myPromise2 = function () {

  return $timeout(function () {
    return 'My PROMISE';
  }, 1000);

};

  myPromise()
  .then(function (result) {
    $log.debug('myPromise', result);
  })
  .then(myPromise2)
  .then(function (result) {
    $log.debug('myPromise2', result);
  });

  eventBriteService.list()
  .then(function (result) {
    $scope.events = result;
  });

  $scope.addEvent = function (what, where, when) {
    var event = {event_id: Guid(), what: what, where: where, when: when};

    $scope.$broadcast('notify', event);

    $scope.events.push(event);
    // $log.debug($scope.events);
  };
});

angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/event-brite', {
    caption: 'Event Brite',
    controller: 'eventBriteController',
    templateUrl: '/eventBrite/eventBrite.html'
  })
	.when('/event-brite/:id', {
		controller: 'eventBriteEventController',
		templateUrl: '/eventBrite/eventBriteEvent.html'
	});
});
