angular.module('myApp')

    .controller('userListController', function ($scope, $http, $location) {

        $scope.go = function (path) {

            $location.path(path);

        };

        $http.get("http://localhost:3000/users")

            .then(function (data) {

                $scope.users = data.data;

            });



    });