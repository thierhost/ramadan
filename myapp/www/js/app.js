
var app = angular.module('ramadan', ['ionic']).run(function($ionicPlatform,$location) {
        $ionicPlatform.ready(function() {
          if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
          $location.path('/');
        });
      });
app.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
});
