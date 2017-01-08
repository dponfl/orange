"use strict";

(function () {
  const appOrange = angular.module('orangeMain', []);



  appOrange.controller('navController', ['$scope', '$location',
    function ($scope, $location) {
      $scope.isActiveMenuItem = function (destination) {
        return destination === $location.path();
      };
    }]);
  
  appOrange.config(function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true,
      rewriteLinks: false
    });
  })

})();

