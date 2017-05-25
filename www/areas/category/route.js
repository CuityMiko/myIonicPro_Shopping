//tab->category分类路由模块
angular.module('starter.route.tab_category',['starter.controller.tab_category'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'areas/category/index.html',
            controller: 'CategoryCtrl'
          }
        }
      })
  }])
