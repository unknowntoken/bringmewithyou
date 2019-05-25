(function () {
      'use strict';
   
      angular
          .module('app', ['ngRoute'])
          .config(config)
          .run(run);
   
      config.$inject = ['$routeProvider', '$locationProvider'];
      function config($routeProvider, $locationProvider) {
          $routeProvider.when('/', {
              controller: 'HomeController',
              templateUrl: '/views/home.html',
              controllerAs: 'vm'
          }).when('/login', {
              controller: 'LoginController',
              templateUrl: '/views/login.html',
              controllerAs: 'vm'
          }).otherwise({ redirectTo: '/login' });
      }
   
      run.$inject = ['$rootScope', '$location', '$http', '$window'];
      function run($rootScope, $location, $http, $window) {
          var userData = $window.sessionStorage.getItem('userData');
          if (userData) {
              $http.defaults.headers.common['Authorization']
                = 'Basic ' + JSON.parse(userData).authData;
          }
   
          $rootScope
          .$on('$locationChangeStart', function (event, next, current) {
              var restrictedPage
                = $.inArray($location.path(), ['/login']) === -1;
              var loggedIn
                = $window.sessionStorage.getItem('userData');
              if (restrictedPage && !loggedIn) {
                  $location.path('/login');
              }
          });
      }
  })();