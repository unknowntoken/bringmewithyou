angular.module('myApp')

    .controller('registerController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

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