angular.module('starter.controller.tab_chats_detail',['starter.service.tab_chats','starter.service.tab_chats_detail'])
  .controller('ChatDetailCtrl',['$scope','$stateParams','Chats',function($scope,$stateParams,Chats){
    $scope.chat = Chats.get($stateParams.chatId);
  }])
