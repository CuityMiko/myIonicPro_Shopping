/**
 * 引导页控制器
 */
angular.module('starter.controller.guidepage',['starter.service.guidepage'])
  .controller('GuidePageCtrl',['$scope','$location',function($scope,$location){
    //swiper引导页
    var mySwiper = new Swiper ('.swiper-container', {
      //direction: 'vertical', //纵向滚动，默认横向
      //loop: true, //循环切换
      autoplay:3000, //自动切换间隔时间
      // 如果需要分页器
      pagination: '.swiper-pagination',
    })

    //开始使用
    $scope.tostart=function(){
      console.log(1111)
      $location.path("/tab/dash");
    }
  }])
