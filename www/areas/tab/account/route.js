//tab->account路由模块
angular.module('starter.route.tab_account',['starter.controller.tab_account'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'areas/tab/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
  }])
