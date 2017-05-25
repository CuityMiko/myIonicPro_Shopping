# ionic项目启动页面配置：在config.xml里的<content src="index.html" />属性

# ionic.bundle.js 将ionic以及ionic相关的Angular文件公共打包在一起

# <ion-nav-view></ion-nav-view> 项目模板文件都要包裹在该标签下，并且一个项目的启动只能有一个该标签

# app.js 项目的入口文件

# 项目进入v1版本

# ionic-image-lazy-load:针对ionic中的图片延迟加载
  1.bower install ionic-image-lazy-load --save
  2.引入js<script src="lib/ionic-image-lazy-load/ionic-image-lazy-load.js"></script>
  3.在app.js的module中加载依赖模块ionicLazyLoad
  4.对需要延迟加载的图片包裹的<ion-content>标签加上lazy-scroll指令：<ion-content lazy-scroll>
  5.对需要延迟加载src属性改成image-lazy-src，并加上该属性image-lazy-loader="lines"即在加载图片的时候图片所在位置有背景图
  6.在img标签上加载 image-lazy-distance-from-bottom-to-load="100" 该属性可以设置滚动条下拉到多大阈值的时候触发图片的延迟加载

# 代码方式实现路由跳转
  1、注入$state服务（ui-route提供的）
  $state.go('路由名称')
  $state.go('路由名称',{name:'zhangsan'})
  2、指令方式实现页面跳转：
  3、ui-sref="tab.category" 指向路由名称 参数：ui-sref="tab.category({name:'zhangsan'})"
  4、a 标签的href方式进行页面跳转
  5、修改地址栏url方式：$location.path("/tab/home");
  6、获取传参数：注入$stateParams,使用：$stateParams.参数名

