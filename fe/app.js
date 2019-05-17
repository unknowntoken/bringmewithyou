var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {

      templateUrl: 'views/mainpage.html'

    })

    .when('/login', {

      templateUrl: 'views/login.html'

    })

    .when('/register', {

      templateUrl: 'views/register.html'

    })

    .when('/story/list', {

      resolve: {
        "check": function ($rootScope, $location) {
          if (!$rootScope.isLoggedIn) {
            $location.path('/');
          }
        }
      },

      templateUrl: 'views/story.list.html'

    })

    .otherwise({

      redirectTo: '/'

    })

});

app.controller('mainController', function ($scope, $location) {

  $scope.go = function (path) {

    $location.path(path);

  }

});

app.controller('loginController', function ($rootScope, $scope, $location) {

  $scope.submit = function () {

    if ($scope.username === 'admin' && $scope.password === 'pass') {

      $rootScope.isLoggedIn = true;

      $rootScope.username = $scope.username;

      $location.path('/story/list');

      return;

    }

    alert("Bad username bruh");

  }

});

app.controller('registerController', function ($scope, $location, $http) {

  $scope.submit = function () {

    

  }

});

app.controller('cookieController', function setCookie(val) {

  cookie();

  function cookie($scope, $cookies) {

    $scope.myCookie = $cookies.get('cookie');

    $cookies.put('cookie', val);

  };

});