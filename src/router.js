/**
 * Created by qianqing on 2017/3/2.
 */
const routers = [
  {
    path: '/',
    name: 'index',
    component(resolve) {
      require.ensure(['./App.vue'], () => {
        resolve(require('./App.vue'));
      });
    },
    children: [
      {
        path: '',
        redirect: '/Demo'
      },
      {
        path: 'Demo',
        name: 'Demo',
        component(resolve) {
          require.ensure(['./demo/Demo.vue'], () => {
            resolve(require('./demo/Demo.vue'));
          });
        }
      },
      {
        path: 'MButton',
        name: 'MButton',
        component(resolve) {
          require.ensure(['./demo/MButton.vue'], () => {
            resolve(require('./demo/MButton.vue'));
          });
        }
      },
      {
        path: 'MFlexBox',
        name: 'MFlexBox',
        component(resolve) {
          require.ensure(['./demo/MFlexBox.vue'], () => {
            resolve(require('./demo/MFlexBox.vue'));
          });
        }
      },
      {
        path: 'MHeader',
        name: 'MHeader',
        component(resolve) {
          require.ensure(['./demo/MHeader.vue'], () => {
            resolve(require('./demo/MHeader.vue'));
          });
        }
      },
      {
        path: 'MTimeLine',
        name: 'MTimeLine',
        component(resolve) {
          require.ensure(['./demo/MTimeLine.vue'], () => {
            resolve(require('./demo/MTimeLine.vue'));
          });
        }
      },
      {
        path: 'MStep',
        name: 'MStep',
        component(resolve) {
          require.ensure(['./demo/MStep.vue'], () => {
            resolve(require('./demo/MStep.vue'));
          });
        }
      },
      {
        path: 'MTabBar',
        name: 'MTabBar',
        component(resolve) {
          require.ensure(['./demo/MTabBar.vue'], () => {
            resolve(require('./demo/MTabBar.vue'));
          });
        }
      }
    ]
  }
];

export default routers;
