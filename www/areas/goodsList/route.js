/**
 * goodsList商品列表路由模块
 */
angular.module('starter.route.goodsList',['starter.controller.goodsList'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/index.html',
        controller: 'GoodsListCtrl'
      })
  }])
