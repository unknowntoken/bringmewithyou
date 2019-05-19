(function () {

  var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

  app.config(function ($routeProvider, $httpProvider) {

    $routeProvider

      .when('/', {

        templateUrl: 'views/mainpage.html',

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

})();