angular.module('myApp')

app.controller('cookieController', function setCookie(val) {

    cookie();

    function cookie($scope, $cookies) {

        $scope.myCookie = $cookies.get('cookie');

        $cookies.put('cookie', val);

    };

});