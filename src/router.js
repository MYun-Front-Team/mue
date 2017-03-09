/**
 * Created by qianqing on 2017/3/2.
 */
const routers = [
  {
    path: '/',
    name: 'index',
    component (resolve) {
      require.ensure(['./App.vue'], () => {
        resolve(require('./App.vue'))
      })
    },
    children: [
      {
        path: '',
        redirect: '/Demo'
      },
      {
        path: 'Demo',
        name: 'Demo',
        component (resolve) {
          require.ensure(['./demo/Demo.vue'], () => {
            resolve(require('./demo/Demo.vue'))
          })
        }
      },
      {
        path: 'MButton',
        name: 'MButton',
        component (resolve) {
          require.ensure(['./demo/MButton.vue'], () => {
            resolve(require('./demo/MButton.vue'))
          })
        }
      },
      {
        path: 'MFlexBox',
        name: 'MFlexBox',
        component (resolve) {
          require.ensure(['./demo/MFlexBox.vue'], () => {
            resolve(require('./demo/MFlexBox.vue'))
          })
        }
      },
      {
        path: 'MHeader',
        name: 'MHeader',
        component (resolve) {
          require.ensure(['./demo/MHeader.vue'], () => {
            resolve(require('./demo/MHeader.vue'))
          })
        }
      },
      {
        path: 'MTimeLine',
        name: 'MTimeLine',
        component (resolve) {
          require.ensure(['./demo/MTimeLine.vue'], () => {
            resolve(require('./demo/MTimeLine.vue'))
          })
        }
      },
      {
        path: 'MStep',
        name: 'MStep',
        component (resolve) {
          require.ensure(['./demo/MStep.vue'], () => {
            resolve(require('./demo/MStep.vue'))
          })
        }
      },
      {
        path: 'MTabBar',
        name: 'MTabBar',
        component (resolve) {
          require.ensure(['./demo/MTabBar.vue'], () => {
            resolve(require('./demo/MTabBar.vue'))
          })
        }
      },
      {
        path: 'MSearch',
        name: 'MSearch',
        component (resolve) {
          require.ensure(['./demo/MSearch.vue'], () => {
            resolve(require('./demo/MSearch.vue'))
          })
        }
      },
      {
        path: 'MTab',
        name: 'MTab',
        component (resolve) {
          require.ensure(['./demo/MTab.vue'], () => {
            resolve(require('./demo/MTab.vue'))
          })
        }
      },
      {
        path: 'MCellBox',
        name: 'MCellBox',
        component (resolve) {
          require.ensure(['./demo/MCellBox.vue'], () => {
            resolve(require('./demo/MCellBox.vue'))
          })
        }
      },
      {
        path: 'MCell',
        name: 'MCell',
        component (resolve) {
          require.ensure(['./demo/MCell.vue'], () => {
            resolve(require('./demo/MCell.vue'))
          })
        }
      },
      {
        path: 'MDateTime',
        name: 'MDateTime',
        component (resolve) {
          require.ensure(['./demo/MDateTime.vue'], () => {
            resolve(require('./demo/MDateTime.vue'))
          })
        }
      },
      {
        path: 'MButtonTab',
        name: 'MButtonTab',
        component (resolve) {
          require.ensure(['./demo/MButtonTab.vue'], () => {
            resolve(require('./demo/MButtonTab.vue'))
          })
        }
      },
      {
        path: 'MPanel',
        name: 'MPanel',
        component (resolve) {
          require.ensure(['./demo/MPanel.vue'], () => {
            resolve(require('./demo/MPanel.vue'))
          })
        }
      },
      {
        path: 'MPopUpPicker',
        name: 'MPopUpPicker',
        component (resolve) {
          require.ensure(['./demo/MPopUpPicker.vue'], () => {
            resolve(require('./demo/MPopUpPicker.vue'))
          })
        }
      },
      {
        path: 'MPopUp',
        name: 'MPopUp',
        component (resolve) {
          require.ensure(['./demo/MPopUp.vue'], () => {
            resolve(require('./demo/MPopUp.vue'))
          })
        }
      },
      {
        path: 'MInput',
        name: 'MInput',
        component (resolve) {
          require.ensure(['./demo/MInput.vue'], () => {
            resolve(require('./demo/MInput.vue'))
          })
        }
      }
    ]
  }
]

export default routers
