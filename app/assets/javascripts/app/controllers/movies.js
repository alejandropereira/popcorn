angular.module('popcornApp.controllers')
  .controller('MoviesController',
      function($scope, MovieService){

        MovieService.movies().then(function(data){
          $scope.movies = data; 
        });

        $scope.addFavorite = function(movie){
          movie.isFavorite = true;
        };

        $scope.removeFavorite = function(movie){
          movie.isFavorite = false;
        };
      });
