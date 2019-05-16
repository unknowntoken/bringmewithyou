angular.module('myApp').controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService) {
  $rootScope.title = "AngularJS Login Sample";

  $scope.formSubmit = function () {
    if (LoginService.login($scope.username, $scope.password)) {
      $rootScope.userName = $scope.username;
      $scope.error = '';
      $scope.username = '';
      $scope.password = '';
      $state.transitionTo('home');
    } else {
      alert("Incorrect username or password!")
      $scope.error = "Incorrect username/password !";
    }
  };
});