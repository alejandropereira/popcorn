angular.module('popcornApp.controllers')
  .controller('MovieController',
      function($scope, MovieService, $routeParams, $sce){
        var id = $routeParams.movie_id;
        MovieService.movie(id).then(function(movie){
          $scope.movie = movie;
          $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.movie.youtubeId);
        }); 
      });
