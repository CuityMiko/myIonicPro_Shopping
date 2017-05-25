//tab路由模块
angular.module('starter.tab',[
  'starter.route.tab_dash',
  'starter.route.tab_account',
  'starter.route.tab_chats',
  'starter.route.tab_chats_detail',
  'starter.controller.tab',
  // 功能实现模块
  'starter.route.tab_home'
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('tab', {
      url: '/tab',
      abstract: true, //抽象路由，跟着下面的路由匹配使用，eg:/tab/dash
      templateUrl: 'areas/tab/tabs.html',
      controller:'TabCtrl'
    })
}])
