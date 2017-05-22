import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import header from 'components/header/header'
import mine from 'components/mine/mine'
import find from 'components/find/find'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/find',
      name: 'find',
      component: find
    }
  ]
})
