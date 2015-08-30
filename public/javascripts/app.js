var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController',
      controller: 'movieController'
    })
    .when('/:id', {
      templateUrl: 'partials/movie.html',
      controller: 'homeController',
      controller: 'filmController'
    })
})
