//tab->dash路由模块
angular.module('starter.route.tab_dash',['starter.controller.tab_dash'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'areas/tab/dash/dash.html',
            controller: 'DashCtrl'
          }
        }
      })
  }])
