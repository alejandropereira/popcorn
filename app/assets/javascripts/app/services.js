angular.module('popcornApp.services', []).
  service("MovieService", function($http, $q) {
    var self = this;
    self.movies = function(){
      var d = $q.defer();

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'part': 'snippet',
          'maxResults': '15',
          'q': 'trailers+español+latino',
          'key': 'AIzaSyBWtHww4bA5pebrSpJlUAzklhDZFdzph_E'
        }
      }).then(function(res){
        var movies = _.map(res.data.items, function(movie){
          return{
            youtubeId: movie['id']['videoId'],
            title: movie['snippet']['title'],
            released: movie['snippet']['publishedAt'],
            description: movie['snippet']['description'],
            posterUrl: movie['snippet']['thumbnails']['medium']['url']
          };
        });

        d.resolve(movies);
      }, function(error){
        d.reject(error);
      });

      return d.promise;
    };

    self.movie = function(id){
      var d = $q.defer();

      self.movies().then(function(movies){
        var movie = _.find(movies, function(movie){
          return id == movie.youtubeId;
        });

        d.resolve(movie);
      }, function(error){
        d.reject(error);
      });

      return d.promise;
    };
  });

