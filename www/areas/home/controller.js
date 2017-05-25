/**
 * 首页控制器模块
 */
angular.module('starter.controller.tab_home',['starter.service.tab_home'])
  .controller('HomeCtrl',['$scope','HomeFcty',function($scope,HomeFcty){
    //获取swiper动态加载的数据
    $scope.HeaderSlideData=HomeFcty.getHeaderSlideData();
    //监听ion-view组件视图完全加载之后的事件
    $scope.$on("$ionicView.afterEnter",(e)=>{
      //swiper引导页
      var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView:1, //在slider的前后各添加一张相同的slider
        //direction: 'vertical', //纵向滚动，默认横向
        loop: true, //循环切换
        autoplay:3000, //自动切换间隔时间
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable:true, //分页器是否可点
        observer:true, //当动态添加swiper的时候，动态初始化swiper
        observeParents:true
        // onSlideChangeEnd:function(swiper){ //滑动到下一个页面触发事件
        //   mySwiper.activeIndex //滑动到第几个页面
        // }
      })
    })
  }])
