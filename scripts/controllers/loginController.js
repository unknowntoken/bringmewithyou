(function () {
    'use strict';
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location', '$window', '$http'];
    function LoginController($location, $window, $http) {
        var vm = this;
        vm.login = login;
 
        (function initController() {
            $window.localStorage.setItem('token', '');
        })();
 
        function login() {
            $http({
                url: 'http://127.0.0.1:8080/login',
                method: "POST",
                data: { 
                    'username': vm.username,
                    'password': vm.password
                }
            }).then(function (response) {
                if (response.data) {
                    var token
                      = $window.btoa(vm.username + ':' + vm.password);
                    var userData = {
                        userName: vm.username,
                        authData: token
                    }
                    $window.sessionStorage.setItem(
                      'userData', JSON.stringify(userData)
                    );
                    $http.defaults.headers.common['Authorization']
                      = 'Basic ' + token;
                    $location.path('/');
                } else {
                    alert("Authentication failed.")
                }
            });
        };
    }
})();