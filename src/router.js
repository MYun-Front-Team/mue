/**
 * Created by qianqing on 2017/3/2.
 */
import App from './App.vue';
import MButton from './demo/MButton.vue';
import MFlexBox from './demo/MFlexBox.vue';
import MHeader from './demo/MHeader.vue';
import MTimeLine from './demo/MTimeLine.vue';

const routers = [
  {
    path: '/',
    component: App
  },
  {
    path: '/MButton',
    component: MButton
  },
  {
    path: '/MFlexBox',
    component: MFlexBox
  },
  {
    path: '/MHeader',
    component: MHeader
  },
  {
    path: '/MTimeLine',
    component: MTimeLine
  }
];

export default routers;