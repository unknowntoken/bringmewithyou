(function () {
    'use strict';
    angular
        .module('app')
        .controller('HomeController', HomeController);
 
    HomeController.$inject = ['$window', '$http', '$scope'];
    function HomeController($window, $http, $scope) {
        var vm = this;
        vm.user = null;
 
        initController();
 
        function initController() {
            $http({
                url: 'http://127.0.0.1:8080/user',
                method: "GET"
            }).then(function (response) {
                vm.user = response.data.name;
            }, function (error) {
                console.log(error);
            });
        };
 
        $scope.logout = function () {
            $window.sessionStorage.setItem('userData', '');
            $http.defaults.headers.common['Authorization'] = 'Basic';
        }
    }
})();