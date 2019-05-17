var app = angular.module('myApp');
 
  app.controller('storyController', 

  function($scope, $rootScope, $stateParams, $state, LoginService) {
    
    $scope.user = $rootScope.userName;
    
  });