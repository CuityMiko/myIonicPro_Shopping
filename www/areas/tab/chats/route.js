//tab->chats路由模块
angular.module('starter.route.tab_chats',['starter.controller.tab_chats'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'areas/tab/chats/chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
  }])
