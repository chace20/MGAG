'use strict';

angular.module('mgagApp.step1', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/step1', {
            templateUrl: 'step1/step1.html',
            controller: 'step1Ctrl'
        });
    }
])

.controller('step1Ctrl', function($scope, $http, shareFactory) {
    $scope.ip;
    $scope.allAmount = '?';

    $http.get('/mgag/api/getAllAmount')
        .then(function(res) {
                $scope.allAmount = res.data.count;
            },
            function(err) {
                console.log(err);
            });
    $scope.next = function() {
        if ($scope.ip == null || $scope.ip === '') {
            alert('什么，你连IP都没有？');
            return;
        }
        shareFactory.setIP($scope.ip);
        window.location.href = '#/step2';
    };
});