/**
 * 引导页路由
 */
angular.module('starter.route.guidepage',['starter.controller.guidepage'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('guidepage', {
        url: '/guidepage',
        templateUrl:'areas/guidepage/index.html',
        controller:'GuidePageCtrl'
      })
  }])
