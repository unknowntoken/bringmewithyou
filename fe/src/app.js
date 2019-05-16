(function() {
    angular.module('myApp', ['ui.router'])
    
    .run(function($rootScope, $location, $state, LoginService) {
       console.clear();
       console.log('running');
      if(!LoginService.isAuthenticated()) {
          $state.transitionTo('login');
        }
    }).config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl : 'views/login.html',
          controller : 'scripts/controllers/loginController.js'
        })
        .state('home', {
          url : '/home',
          templateUrl : 'views/home.html',
          controller : 'scripts/controllers/homeController.js'
        });
        
         $urlRouterProvider.otherwise('/login');
    }]);
   
  })();