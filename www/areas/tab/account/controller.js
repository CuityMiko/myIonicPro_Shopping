angular.module('starter.controller.tab_account',['starter.service.tab_account'])
  .controller('AccountCtrl',['$scope',function($scope){
    $scope.settings = {
      enableFriends: true
    };
  }])
