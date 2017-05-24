//配置模块，控制不同平台机器的兼容性
angular.module('starter.config',[])
  .config(function($ionicConfigProvider){
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.tabs.position("bottom")
  });
