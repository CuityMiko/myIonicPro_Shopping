angular.module('starter.controller.tab_chats',['starter.service.tab_chats'])
  .controller('ChatsCtrl',['$scope','Chats',function($scope,Chats){
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }])
