var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider, $httpProvider) {

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

    .when('/userlist', {

      templateUrl: 'views/userlist.html'

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

  //Enable cross domain calls

  $httpProvider.defaults.useXDomain = true;

  delete $httpProvider.defaults.headers.common['X-Requested-With'];

});

app.controller('mainController', function ($scope, $location) {

  $scope.go = function (path) {

    $location.path(path);

  }

});

app.controller('loginController', function ($scope, $http, $location) {

  $scope.goBack = function () {

    $location.path("/");

  };

  $scope.submit = function () {

    $http.get("https://demo2821698.mockable.io/users")

      .then(function (data) {

        console.log(data.users.username);

      });


  };

});

app.controller('registerController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.goBack = function () {

    $location.path("/");

  };

  $scope.submit = function () {

    var data = {
      firstname: $scope.firstname,
      lastname: $scope.lastname,
      username: $scope.username,
      password: $scope.password
    }

    jsonData = JSON.stringify(data);

    $http({

      method: 'POST',

      // JSON server allocates this database for all the users
      url: 'http://localhost:3000/users',

      // data keeps all the data currently strigified.
      data: jsonData

    }).then(function (success) {

      alert("success");
      callback(success);

    }, function (error) {

      alert("error");
      errorCallback(error);

    });

  };

}]);

app.controller('userListController', function ($scope, $http, $location) {
  
  $scope.go = function (path) {

    $location.path(path);

  };

  $http.get("http://localhost:3000/users")

    .then(function (data) {

      $scope.users = data.data;

    });



});

app.controller('cookieController', function setCookie(val) {

  cookie();

  function cookie($scope, $cookies) {

    $scope.myCookie = $cookies.get('cookie');

    $cookies.put('cookie', val);

  };

});