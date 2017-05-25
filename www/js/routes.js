//路由配置模块
angular.module('starter.routes',[
  'starter.route.guidepage', //引导页
  'starter.tab',
  'starter.route.goodsList' //商品列表
])
.config(['$urlRouterProvider',function($urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/guidepage');
}]);
