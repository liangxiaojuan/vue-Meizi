// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point

//
// let routes = [
//  {path: '/', name: 'index', component: App, children: [{path: '/welfare', component: Welfare}, {path: '/ios', component: Ios}, {path: '/day', component: Swiper}]}
// ];

const routers = [{
  path: '/',
  name: 'index',
  component(resolve) {
    require.ensure(['./App.vue'], () => {
      resolve(require('./App.vue'));
    });
  },
  children: [
    {
      path: '/welfare',
      name: 'welfare',
      component(resolve) {
        require.ensure(['./components/welfare/welfare.vue'], () => {
          resolve(require('./components/welfare/welfare.vue'));
        });
      }
    }, {
      path: '/day',
      name: 'day',
      component(resolve) {
        require.ensure(['./components/swiper/swiper.vue'], () => {
          resolve(require('./components/swiper/swiper.vue'));
        });
      },
      meta: { requiresAuth: true }
    }, {
      path: '/ios',
      name: 'ios',
      component(resolve) {
        require.ensure(['./components/lists/ios.vue'], () => {
          resolve(require('./components/lists/ios.vue'));
        });
      },
      meta: { requiresAuth: true }
    }, {
      path: '/android',
      name: 'android',
      component(resolve) {
        require.ensure(['./components/lists/android.vue'], () => {
          resolve(require('./components/lists/android.vue'));
        });
      }
    }, {
      path: '/web',
      name: 'web',
      component(resolve) {
        require.ensure(['./components/lists/web.vue'], () => {
          resolve(require('./components/lists/web.vue'));
        });
      }
    }
  ]
},
{
  path: '/wecome',
  name: 'wecome',
  component(resolve) {
    require.ensure(['./components/wecome/wecome.vue'], () => {
      resolve(require('./components/wecome/wecome.vue'));
    });
  }
}];

export default routers;
