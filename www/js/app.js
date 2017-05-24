// Ionic Starter App

// 项目入口
angular.module('starter', ['ionic',
  'starter.config', //配置模块，控制不同平台机器的兼容性
  'starter.global', //全局配置文件
  'starter.routes' //路由配置模块
])
//cordova相关，启动平台监测
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
