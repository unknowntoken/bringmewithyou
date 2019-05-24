var app = angular.module('myApp');

app.controller('storyController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.logout = function () {

    $location.path("/");

  }

  $http({
    method: 'GET', 
    url: 'http://25.7.114.1:8080/story/list',
    headers: { 
      'Content-Type': 'application/json' 
    }
  })

    .then(function (response) {

      $scope.stories = [];

      $scope.stories = response.data;

      console.log($scope.stories[0]);

    }, function (error) {

      console.log(error);

    });



}])