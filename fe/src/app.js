(function() {
    var app = angular.module('myApp', ['ui.router']);
    
     app.run(function($rootScope, $location, $state, LoginService) {
       console.clear();
       console.log('running');
      if(!LoginService.isAuthenticated()) {
          $state.transitionTo('login');
        }
    });
    
    app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl : 'views/login.html',
          controller : 'src/scripts/controllers/loginController.js'
        })
        .state('home', {
          url : '/home',
          templateUrl : 'views/home.html',
          controller : 'src/scripts/controllers/homeController.js'
        });
        
         $urlRouterProvider.otherwise('/login');
    }]);
   
  })();