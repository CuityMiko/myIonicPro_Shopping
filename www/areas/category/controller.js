/**
 * 分类控制器
 */
angular.module('starter.controller.tab_category',['starter.service.tab_category'])
  .controller('CategoryCtrl',['$scope','CategoryFcty',function($scope,CategoryFcty){
    $scope.$on('$ionicView.enter', function (e) {
      $scope.categoryData=CategoryFcty.getCategoryData();
      $scope.getCategoryDetailData(102);
    });

     // 头部滚动条数据
    $scope.getCategoryDetailData=function(typeNumber){

      if(typeNumber==102){
        $scope.categoryDetailData=[
          {
            name:"毛呢大衣",
            src:"img/category/nz1.jpg",
            typeNumber:'10001'
          },
          {
            name:"羽绒服",
            src:"img/category/nz2.jpg",
            typeNumber:'10002'
          },
          {
            name:"针织衫",
            src:"img/category/nz3.jpg",
            typeNumber:'10003'
          },
          {
            name:"连衣裙",
            src:"img/category/nz4.jpg",
            typeNumber:'10004'
          },
          {
            name:"棉服",
            src:"img/category/nz5.jpg",
            typeNumber:'10005'
          },
          {
            name:"长袖T恤",
            src:"img/category/nz6.jpg",
            typeNumber:'10006'
          },
          {
            name:"羊绒衫",
            src:"img/category/nz7.jpg",
            typeNumber:'10007'
          },
          {
            name:"衬衫",
            src:"img/category/nz8.jpg",
            typeNumber:'10008'
          },
          {
            name:"风衣",
            src:"img/category/nz9.jpg",
            typeNumber:'10009'
          },
          {
            name:"皮衣",
            src:"img/category/nz10.jpg",
            typeNumber:'10010'
          },
          {
            name:"休闲裤",
            src:"img/category/nz11.jpg",
            typeNumber:'10011'
          },
          {
            name:"牛仔裤",
            src:"img/category/nz12.jpg",
            typeNumber:'10012'
          }
        ];
      }
      else{
        $scope.categoryDetailData=[
          {
            name:"夹克",
            src:"img/category/nanz1.jpg",
            typeNumber:'10013'
          },
          {
            name:"衬衫",
            src:"img/category/nanz2.jpg",
            typeNumber:'10014'
          },
          {
            name:"牛仔裤",
            src:"img/category/nanz3.jpg",
            typeNumber:'10015'
          },
          {
            name:"羽绒服",
            src:"img/category/nanz4.jpg",
            typeNumber:'10016'
          },

          {
            name:"T恤",
            src:"img/category/nanz5.jpg",
            typeNumber:'10017'
          },
          {
            name:"休闲裤",
            src:"img/category/nanz6.jpg",
            typeNumber:'10018'
          },
          {
            name:"卫衣",
            src:"img/category/nanz7.jpg",
            typeNumber:'10019'
          },
          {
            name:"针织衫",
            src:"img/category/nanz8.jpg",
            typeNumber:'10020'
          },
          {
            name:"棉服",
            src:"img/category/nanz9.jpg",
            typeNumber:'10021'
          }
        ];
      }
    };


    // 左侧分类单击样式修改
    $scope.categoryLeftClick=function(e){
      e.target.className='nav-current';
      $(e.target).siblings().removeClass().addClass('nav-blur');
    };
  }])
