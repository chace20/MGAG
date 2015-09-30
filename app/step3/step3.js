'use strict';

angular.module('mgagApp.step3', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/step3', {
            templateUrl: 'step3/step3.html',
            controller: 'step3Ctrl'
        });
    }
])

.controller('step3Ctrl', function($scope, $http, shareFactory) {
    $scope.type = 0;
    $scope.typeCountList;
    //11 kinds

    $http.get('/mgag/api/getTypeAmount')
        .then(function(res) {
                $scope.typeCountList = res.data;
            },
            function(err) {
                console.log(err);
            });

    $scope.$watch('type', function(value) {
        shareFactory.setType($scope.type);
    });

    $scope.next = function(){
        window.location.href = '#/step4';
    };

});