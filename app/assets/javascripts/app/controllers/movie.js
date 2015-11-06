angular.module('popcornApp.controllers')
  .controller('MovieController',
      function($scope, MovieService, $routeParams, $sce){
        var id = $routeParams.movie_id;
        $scope.movie = MovieService.movie(id); 
        $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.movie.youtubeId);
      });
