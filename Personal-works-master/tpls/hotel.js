/**
 * Created by Administrator on 16-11-28.
 */
var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'tpls/hotel.html',
            controller:'focusController'
        })
        .when('/plane',{
            templateUrl:'tpls/plane.html',
            controller:'focusController'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

app.controller('moneyController',['$scope',function($scope){
    $scope.number = 0;
    $scope.dnumber = 0;
    $scope.add = function(){
        if ($scope.number < 10) {
            $scope.number ++;
        }else {
            alert('数量不能超过10');
        }
    }
    $scope.del = function(){
        if ($scope.number > 1) {
            $scope.number --;
        }else {
            alert('数量不能小于1');
        }
    }
    $scope.delPlane = function(){
        if ($scope.number > 0) {
            $scope.number --;
        }else {
            alert('数量不能小于0');
        }
    }
    $scope.delUpdate = function(){
        if ($scope.dnumber > 0) {
            $scope.dnumber --;
        }else {
            alert('数量不能小于0');
        }
    }
    $scope.update = function(){
        if ($scope.dnumber < 10) {
            $scope.dnumber ++;
        }else {
            alert('数量不能超过10');
        }
    }
}]);
app.controller('focusController',['$scope',function($scope){
    angular.element(document).ready(function () {
        $('.person input').on('focus', function () {
            $('.count').slideDown(200);
        });
        $('button').on('click', function () {
            alert('搜索成功!');
            $('.count').slideUp(100);
        });
        $('.text img').on('click', function () {
            $('.text').hide();
           $('.img').slideDown(400);
        });

        $('#date1').datetimepicker({
            lang:'ch',
            timepicker:false,
            format:'Y-m-d',
            formatDate:'Y/m/d'
        });
        $('#date2').datetimepicker({
            lang:'ch',
            timepicker:true,
            format:'Y-m-d H:i',
            formatDate:'Y/m/d',
            step:5
        });
    });
}]);
