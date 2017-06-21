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
        redirect: '/demo'
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
      },
      {
        path: 'MRadio',
        name: 'MRadio',
        component (resolve) {
          require.ensure(['./demo/MRadio.vue'], () => {
            resolve(require('./demo/MRadio.vue'))
          })
        }
      },
      {
        path: 'MChecklist',
        name: 'MChecklist',
        component (resolve) {
          require.ensure(['./demo/MChecklist.vue'], () => {
            resolve(require('./demo/MChecklist.vue'))
          })
        }
      },
      {
        path: 'MChecker',
        name: 'MChecker',
        component (resolve) {
          require.ensure(['./demo/MChecker.vue'], () => {
            resolve(require('./demo/MChecker.vue'))
          })
        }
      },
      {
        path: 'MNumber',
        name: 'MNumber',
        component (resolve) {
          require.ensure(['./demo/MNumber.vue'], () => {
            resolve(require('./demo/MNumber.vue'))
          })
        }
      },
      {
        path: 'MRater',
        name: 'MRater',
        component (resolve) {
          require.ensure(['./demo/MRater.vue'], () => {
            resolve(require('./demo/MRater.vue'))
          })
        }
      },
      {
        path: 'MMsg',
        name: 'MMsg',
        component (resolve) {
          require.ensure(['./demo/MMsg.vue'], () => {
            resolve(require('./demo/MMsg.vue'))
          })
        }
      },
      {
        path: 'MTextarea',
        name: 'MTextarea',
        component (resolve) {
          require.ensure(['./demo/MTextarea.vue'], () => {
            resolve(require('./demo/MTextarea.vue'))
          })
        }
      },
      {
        path: 'MAddress',
        name: 'MAddress',
        component (resolve) {
          require.ensure(['./demo/MAddress.vue'], () => {
            resolve(require('./demo/MAddress.vue'))
          })
        }
      },
      {
        path: 'MAlert',
        name: 'MAlert',
        component (resolve) {
          require.ensure(['./demo/MAlert.vue'], () => {
            resolve(require('./demo/MAlert.vue'))
          })
        }
      },
      {
        path: 'MConfirm',
        name: 'MConfirm',
        component (resolve) {
          require.ensure(['./demo/MConfirm.vue'], () => {
            resolve(require('./demo/MConfirm.vue'))
          })
        }
      },
      {
        path: 'MToast',
        name: 'MToast',
        component (resolve) {
          require.ensure(['./demo/MToast.vue'], () => {
            resolve(require('./demo/MToast.vue'))
          })
        }
      },
      {
        path: 'MActionsheet',
        name: 'MActionsheet',
        component (resolve) {
          require.ensure(['./demo/MActionsheet.vue'], () => {
            resolve(require('./demo/MActionsheet.vue'))
          })
        }
      },
      {
        path: 'MLoad',
        name: 'MLoad',
        component (resolve) {
          require.ensure(['./demo/MLoad.vue'], () => {
            resolve(require('./demo/MLoad.vue'))
          })
        }
      },
      {
        path: 'MScroller',
        name: 'MScroller',
        component (resolve) {
          require.ensure(['./demo/MScroller.vue'], () => {
            resolve(require('./demo/MScroller.vue'))
          })
        }
      },
      {
        path: 'Pullup',
        name: 'Pullup',
        component (resolve) {
          require.ensure(['./demo/Pullup.vue'], () => {
            resolve(require('./demo/Pullup.vue'))
          })
        }
      },
      {
        path: 'Pulldown',
        name: 'Pulldown',
        component (resolve) {
          require.ensure(['./demo/Pulldown.vue'], () => {
            resolve(require('./demo/Pulldown.vue'))
          })
        }
      },
      {
        path: 'PullUpDown',
        name: 'PullUpDown',
        component (resolve) {
          require.ensure(['./demo/PullUpDown.vue'], () => {
            resolve(require('./demo/PullUpDown.vue'))
          })
        }
      },
      {
        path: 'ViewBox',
        name: 'ViewBox',
        component (resolve) {
          require.ensure(['./demo/ViewBox.vue'], () => {
            resolve(require('./demo/ViewBox.vue'))
          })
        }
      },
      {
        path: 'CellFormPreview',
        name: 'CellFormPreview',
        component (resolve) {
          require.ensure(['./demo/CellFormPreview.vue'], () => {
            resolve(require('./demo/CellFormPreview.vue'))
          })
        }
      },
      {
        path: 'FormPreview',
        name: 'FormPreview',
        component (resolve) {
          require.ensure(['./demo/FormPreview.vue'], () => {
            resolve(require('./demo/FormPreview.vue'))
          })
        }
      },
      {
        path: 'login',
        name: 'login',
        component (resolve) {
          require.ensure(['./demo/login.vue'], () => {
            resolve(require('./demo/login.vue'))
          })
        }
      },
      {
        path: 'resetPassword',
        name: 'resetPassword',
        component (resolve) {
          require.ensure(['./demo/reset-password.vue'], () => {
            resolve(require('./demo/reset-password.vue'))
          })
        }
      },
      {
        path: 'goodsListA',
        name: 'goodsListA',
        component (resolve) {
          require.ensure(['./demo/goods-list-a.vue'], () => {
            resolve(require('./demo/goods-list-a.vue'))
          })
        }
      },
      {
        path: 'goodsListB',
        name: 'goodsListB',
        component (resolve) {
          require.ensure(['./demo/goods-list-b.vue'], () => {
            resolve(require('./demo/goods-list-b.vue'))
          })
        }
      },
      {
        path: 'goodsListC',
        name: 'goodsListC',
        component (resolve) {
          require.ensure(['./demo/goods-list-c.vue'], () => {
            resolve(require('./demo/goods-list-c.vue'))
          })
        }
      },
      {
        path: 'cartA',
        name: 'cartA',
        component (resolve) {
          require.ensure(['./demo/cart-a.vue'], () => {
            resolve(require('./demo/cart-a.vue'))
          })
        }
      },
      {
        path: 'cartB',
        name: 'cartB',
        component (resolve) {
          require.ensure(['./demo/cart-b.vue'], () => {
            resolve(require('./demo/cart-b.vue'))
          })
        }
      },
      {
        path: 'bookList',
        name: 'bookList',
        component (resolve) {
          require.ensure(['./demo/book-list.vue'], () => {
            resolve(require('./demo/book-list.vue'))
          })
        }
      },
      {
        path: 'addressList',
        name: 'addressList',
        component (resolve) {
          require.ensure(['./demo/address-list.vue'], () => {
            resolve(require('./demo/address-list.vue'))
          })
        }
      },
      {
        path: 'badge',
        name: 'badge',
        component (resolve) {
          require.ensure(['./demo/badge.vue'], () => {
            resolve(require('./demo/badge.vue'))
          })
        }
      },
      {
        path: 'user',
        name: 'user',
        component (resolve) {
          require.ensure(['./demo/syj/user.vue'], () => {
            resolve(require('./demo/syj/user.vue'))
          })
        }
      },
      {
        path: 'message',
        name: 'message',
        component (resolve) {
          require.ensure(['./demo/syj/message.vue'], () => {
            resolve(require('./demo/syj/message.vue'))
          })
        }
      },
      {
        path: 'order',
        name: 'order',
        component (resolve) {
          require.ensure(['./demo/syj/order.vue'], () => {
            resolve(require('./demo/syj/order.vue'))
          })
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component (resolve) {
          require.ensure(['./demo/syj/goods-detail.vue'], () => {
            resolve(require('./demo/syj/goods-detail.vue'))
          })
        }
      }
    ]
  }
]

export default routers
