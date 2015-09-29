'use strict';

// Declare app level module which depends on views, and components
angular.module('mgagApp', [
  'ngRoute',
  'mgagApp.step1',
  'mgagApp.step2',
  'mgagApp.step3',
  'mgagApp.step4'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/step1'});
}])

.factory('shareFactory', function(){
    var ip;
    var type;
    return {
        getIP: function(){return ip;},
        setIP: function(result){ip = result;},
        getType: function(){return type;},
        setType: function(result){type = result}
    };
});

