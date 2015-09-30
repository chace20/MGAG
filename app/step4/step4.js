'use strict';

angular.module('mgagApp.step4', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/step4', {
            templateUrl: 'step4/step4.html',
            controller: 'step4Ctrl'
        });
    }
])

.controller('step4Ctrl', function($scope, $http, shareFactory) {
    $scope.ip = shareFactory.getIP();
    $scope.type = shareFactory.getType();

    $scope.select = function(event){
        if($(event.target).attr('class') == 'div-platform'){
            $(event.target).attr('class', 'div-platform-selected');
        }else if($(event.target).attr('class') == 'div-platform-selected') {
            $(event.target).attr('class', 'div-platform');
        }
    };


    //提交
    $scope.submit = function() {
        $http.post('/mgag/api/postResult', {
            ip: $scope.ip,
            type: $scope.type
        })
            .then(function(res) {
                    if (res.data.code == 1) {
                        if (confirm('生成失败，点击确定重新生成')) {
                            window.location.href = '#/step1';
                        }
                    }else{
                        window.location.href = 'generating.html';
                    }
                },
                function(err) {
                    alert('未知错误：' + err);
                    console.log(err);
                });
    };
});