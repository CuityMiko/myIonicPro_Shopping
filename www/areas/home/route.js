/**
 * tab->首页路由模块
 */
angular.module('starter.route.tab_home',['starter.controller.tab_home'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/index.html',
            controller: 'HomeCtrl'
          }
        }
      })
  }])
