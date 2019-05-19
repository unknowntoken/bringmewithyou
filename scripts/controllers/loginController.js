angular.module('myApp')

    .controller('loginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.goBack = function () {

            $location.path("/");

        };

        $scope.submit = function () {

            var loggedUsername = $scope.username;
            var loggedPassword = $scope.password;

            $http({

                method: 'GET',

                url: 'http://localhost:3000/users',

                params: {
                    username: loggedUsername,
                }

            }).then(function (response, status, headers, config) {

                username = response.data;

                console.log(username);

                if(response.data.username === loggedUsername && response.data.password === loggedPassword){

                    $rootScope.isLoggedIn = true;
                    $location.path("/");

                }
            
                // this function will be called when the request is success

            }, function error(response) {

                alert()
                // this function will be called when the request returned error status

            });


        };

    }]);