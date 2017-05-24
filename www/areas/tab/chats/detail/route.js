//tab->chats路由模块
angular.module('starter.route.tab_chats_detail',['starter.controller.tab_chats_detail'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'areas/tab/chats/detail/chatsdetail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
  }])
