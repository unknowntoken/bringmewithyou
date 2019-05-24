app = angular.module('myApp')

app.controller('loginController', function ($rootScope, $scope, $http, $location) {

    var authenticate = function (credentials, callback) {

        console.log(credentials.username);

        var headers = credentials ? {

            authorization: "Basic "
                + btoa(credentials.username + ":" + credentials.password)

        } : {};

        $http.get('user', {

            headers: headers
        })

            .then(function (data) {

                if (data.username) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();

            }),function (error) {

                $rootScope.authenticated = false;
                callback && callback();

            };

    }

    authenticate();

    $scope.credentials = {};

    $scope.login = function () {
        authenticate($scope.credentials, function () {
            if ($rootScope.authenticated) {

                $location.path("/");
                $scope.error = false;

            } else {

                
                $scope.error = true;

            }
        });
    };
});