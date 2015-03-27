angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  /*
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  */
})

.controller('LoginCtrl', function($scope, $http, $cordovaOauth) {
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $scope.myTitle="jjsj";
    $scope.login = function() {
        $cordovaOauth.google("433457765042-8sttl5kdok7c92d74ciu4e8p8idrpnjl.apps.googleusercontent.com", ["email"]).then(function(result) {
            console.log("Response Object -> " + JSON.stringify(result));
        }, function(error) {
            console.log("Error -> " + error);
        });
    };
 
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str){
            return this.indexOf(str) == 0;
        };
    }
    
})
 
.controller('SecureCtrl', function($scope, $http) {
 
    $scope.accessToken = accessToken;
    
})

.controller('BuildinglistsCtrl', function($scope) {
  $scope.buildinglists = [
    { title: 'BUILDING ONE', id: 1 },
    { title: 'EAST RIVER TOWER', id: 2 },
    { title: 'BUILDING THREE', id: 3 },
    { title: 'BUILDING FOUR', id: 4 },
  ];
})

.controller("OauthExample", function($scope, $cordovaOauth) {
  $scope.googleLogin = function() {
      $cordovaOauth.google("CLIENT_ID_HERE", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
          console.log(JSON.stringify(result));
      }, function(error) {
          console.log(error);
      });
  }

})

.controller('BuildinglistCtrl', function($scope, $stateParams) {
  $scope.buildingname = $stateParams.buildinglistName;
});
