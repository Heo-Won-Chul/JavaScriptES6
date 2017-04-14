'use strict'

app.config(($routeProvider, $locationProvider) => {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/red', {
            templateUrl : 'app/template/RedView.html'
        })
        .when('/green', {
            templateUrl : 'app/template/GreenView.html'
        })
        .otherwise({redirectTo: '/red'});
});