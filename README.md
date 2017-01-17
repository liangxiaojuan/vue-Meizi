# vue-Meizi

>  本项目是基于vue2最新实战项目，是适合新手进阶的绝佳教程。代码简单易懂，注释多多。实现了移动端使用最多的 无限滚动，图片加载，左右滑动，等待。先发布预览版本，后面更多更全的功能和教程将会陆续发出。

###首先

***
>*  感谢[gank.io](http://gank.io/)提供的api接口

>* 喜欢的请点心，关注，star ,fork,这些是我坚持下去的动力

>* demo地址 [demo](http://liangxiaojuan.github.io/meizi/index) （请用chrome的手机模式预览）

>* 本项目地址[github地址](https://github.com/liangxiaojuan/vue-Meizi)

>* 手机扫一扫

![项目二维码.png](http://upload-images.jianshu.io/upload_images/4249223-553d02ead2cb78fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 项目技术架构
***
*  vue-cli
*  vue
*  vue-resource
*  vue-router
*  vuex
*  vue-awesome-swiper
*  vue-infinite-scroll
*  stylus
*  webpack

###上图
***
* 侧滑导航

![1.gif](http://upload-images.jianshu.io/upload_images/4249223-5f3b13d8a460f340.gif?imageMogr2/auto-orient/strip)

* 瀑布流布局，无限滚动，图片懒加载

![2.gif](http://upload-images.jianshu.io/upload_images/4249223-219e645475534a08.gif?imageMogr2/auto-orient/strip)

* 左右滑动，左右切换

![3.gif](http://upload-images.jianshu.io/upload_images/4249223-81d898b9ac461048.gif?imageMogr2/auto-orient/strip)


###安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/liangxiaojuan/vue-Meizi.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:9090)

```
npm run dev
```
发布代码

```
npm run build
```
### 安装注意
安装 vue-cli
```
npm install -g vue-cli
```
安装 vue-cli eslint
```
npm install -g eslint
```
 安装依赖 friendly-errors-webpack-plugin

```
npm install friendly-errors-webpack-plugin --save-dev
```
###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   ├── vuex           // vuex状态管理器
│   ├── router.js     // 路由配置器
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 瀑布流布局
* 无限滚动
* 侧边导航
* 图片懒加载
* 左右滑动切换
* 等等

### 正在实现的功能
***
* 上拉加载
*  搜索
*  我的收藏
*  登录
*  等等

### 最后
***
* 我的另外一个开源项目[饿了么app](https://github.com/liangxiaojuan/eleme)（已经star400+）
* 如果喜欢一定要 star哈!!!（谢谢!!）
* 如果有意见和问题 请在 lssues提出，我会在线解答。
* 我年后要离职了 对我感兴趣的可以联系我 [简历](https://github.com/liangxiaojuan/resume)
