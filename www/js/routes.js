//路由配置模块
angular.module('starter.routes',[
  'starter.tab'
])
.config(['$urlRouterProvider',function($urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
}]);
