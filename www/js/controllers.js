angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('LoginCtrl', function($scope, $http, $cordovaOauth, $localStorage, $location) {
    $scope.myValue=true;
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    if($localStorage.hasOwnProperty("accessToken") === false) {
      $scope.facebookLogin = function() {
          $cordovaOauth.facebook("838683446202918", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
              $localStorage.accessToken = result.access_token;
              alert('successful registration');
              $location.path("/buildinglists");
          }, function(error) {
              alert("There was a problem signing in!  See the console for logs");
              alert(error);
          });
      };
    }
    else {
      $location.path("/buildinglists");
    }
 
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str){
            return this.indexOf(str) == 0;
        };
    }
    
})
 
.controller('BuildinglistsCtrl', function($scope,$http, $localStorage, $location) {
  $scope.buildinglists = [
    { title: 'BUILDING ONE', id: 1 },
    { title: 'EAST RIVER TOWER', id: 2 },
    { title: 'BUILDING THREE', id: 3 },
    { title: 'BUILDING FOUR', id: 4 },
  ];

  $scope.init = function() {
    if($localStorage.hasOwnProperty("accessToken") === true) {
      $http.get("https://graph.facebook.com/v2.2/me/feed", { params: { access_token: $localStorage.accessToken, format: "json" }}).then(function(result) {
          $scope.feedData = result.data.data;
          $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "picture", format: "json" }}).then(function(result) {
              $scope.feedData.myPicture = result.data.picture.data.url;
          });
      }, function(error) {
          alert("There was a problem getting your profile.  Check the logs for details.");
          console.log(error);
      });
    } else {
        alert("Not signed in");
        $location.path("/login");
    }
  };

})

.controller('BuildinglistCtrl', function($scope, $stateParams) {
  $scope.buildingname = $stateParams.buildinglistName;
});
