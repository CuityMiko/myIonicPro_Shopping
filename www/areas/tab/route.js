//tab路由模块
angular.module('starter.tab',[
  'starter.route.tab_dash',
  'starter.route.tab_account',
  'starter.route.tab_chats',
  'starter.route.tab_chats_detail'
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('tab', {
      url: '/tab',
      abstract: true, //抽象路由，跟着下面的路由匹配使用，eg:/tab/dash
      templateUrl: 'areas/tab/tabs.html'
    })
}])
