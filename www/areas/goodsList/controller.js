angular.module('starter.controller.goodsList',['starter.service.goodsList'])
  .controller('GoodsListCtrl',['$scope','GoodsListFcty','$ionicLoading',function($scope,GoodsListFcty,$ionicLoading){
    // var flag=1;
    // var gdpromise= GoodsListFcty.getdata(flag);
    // gdpromise.then(
    // (data)=>{ //成功回调
    //   $scope.gdata=data;
    // },
    // (err)=>{ //失败
    //   console.log(err);
    // });


    $scope.gdata=[];
    $scope.pageindex=1;
    $scope.isloadmore=false;
    var getpagedata=function(flag){
      //显示遮罩层
      $ionicLoading.show({
        template:'数据加载中...'
      })
      var gdpromise= GoodsListFcty.getpagedata($scope.pageindex);
      gdpromise.then((data)=>{
        if(data==null || data.length<=0){
          $scope.isloadmore=false;
          return;
        }
        if(flag>0){
          data.forEach((item)=>{
            $scope.gdata.push(item)
          })
        }else
          $scope.gdata=data;
      }).finally(function() {
        if(flag<1){
          // 停止广播ion-refresher
          $scope.$broadcast('scroll.refreshComplete');
          $scope.isloadmore=true;
        }
        else
          $scope.$broadcast('scroll.infiniteScrollComplete');
        $ionicLoading.hide();
     });
    }
    //ion-view刚刚加载完毕的时候
    $scope.$on('$ionicView.beforeEnter',function(){
      getpagedata(0);
    })
    //下拉刷新
    $scope.func_refreshGoodsList=function(){
      $scope.pageindex=1;
      $scope.gdata=[];
      $scope.isloadmore=false;
      getpagedata(0);
    }
    //上拉加载更多
    $scope.loadMoreData=function(){
      $scope.pageindex++;
      getpagedata(1);
    }
  }])
