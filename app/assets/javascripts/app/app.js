angular.module('popcornApp', [
    'ngRoute', 
    'popcornApp.controllers',
    'popcornApp.services'
])
.config(function($routeProvider, $locationProvider){
  $routeProvider.
    when('/movie/:movie_id', {
      controller: 'MovieController',
      templateUrl: '/templates/movie.html'
    }).
    when('/', {
      controller: 'MoviesController',
      templateUrl: '/templates/movies.html'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
})
.filter('cleantitle', function(){
  return function(input){
    var title = input.replace(/\sTr[\w|\s|#|(|)|á|ñ]+/ig, "");
    title = title.replace(/\s-–[\w|\s|#|(|)|á|ñ|-]+/ig, "");
    title = title.replace(/\s--[\w|\s|#|(|)|á|ñ|-]+/ig, "");
    return title.replace(/Final/, "").trim();
  };
});
