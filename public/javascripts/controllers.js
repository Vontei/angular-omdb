app.controller('homeController', function($scope, $http){
  $scope.getMovie = function(){
    $http.get('http://www.omdbapi.com/?s='+ $scope.search).then(function (data) {
      console.log(data)
      $scope.results = data.data.Search
    })
  }
});


app.controller('movieController',function ($scope, $http) {
  $scope.message = "Welcome!"
  $scope.getMovie = function(){
    $http.get('http://www.omdbapi.com/?s='+ $scope.search).then(function (data) {
      console.log(data)
      $scope.results = data.data.Search
    })
  }
})
