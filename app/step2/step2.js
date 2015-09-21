'use strict';

angular.module('mgagApp.step2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/step2', {
    templateUrl: 'step2/step2.html',
    controller: 'step2Ctrl'
  });
}])

.controller('step2Ctrl', function($scope, shareFactory) {
    $scope.next = function() {
        window.location.href = '#/step3';
    };
    $scope.select = function(event){
        if(event.target.id == 'unity'){
            $('#cocos').attr('class', 'div-engine');
            $('#unity').attr('class', 'div-engine-selected');
        } else {
            $('#unity').attr('class', 'div-engine');
            $('#cocos').attr('class' ,'div-engine-selected');
        }
    };
});