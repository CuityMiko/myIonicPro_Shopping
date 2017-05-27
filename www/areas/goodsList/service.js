angular.module('starter.service.goodsList',[])
  .factory('GoodsListFcty',['$q','$timeout',function($q,$timeout){
    var getgoodsdata=function(){
      var goodsdata=[];
      for (var i = 0; i < 100; i++) {
        goodsdata.push({
          id:i+1,
          name:`商品${i+1}`
        });
      }
      return goodsdata;
    }
    var getpagedata=function(pageindex){
      return getgoodsdata().splice((pageindex-1)*15,15);
    }
    return {
      getdata:(flag)=>{
        //$q的promise方法
        var deferred=$q.defer();
        $timeout(()=>{
          if(flag>0)
            deferred.resolve(getgoodsdata()) //成功
          else
            deferred.reject('数据有误') //失败
        },3000);
        return deferred.promise;
      },
      getpagedata:(pageindex)=>{
        var deferred=$q.defer();
        var timer=1500;
        if(pageindex==1){
            timer=5000;
        }
        $timeout(()=>{
          deferred.resolve(getpagedata(pageindex));
        },timer)
        return deferred.promise;
      }
    }
  }])
