angular.module('popcornApp.controllers')
  .controller('MoviesController',
      function($scope, MovieService){

        $scope.movies = MovieService.movies();

        $scope.addFavorite = function(movie){
          movie.isFavorite = true;
        };

        $scope.removeFavorite = function(movie){
          movie.isFavorite = false;
        };
      });
