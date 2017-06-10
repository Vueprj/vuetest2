import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from 'components/home/home'
import mine from 'components/mine/mine'
import find from 'components/find/find'
import laught from 'components/laught/laught'
import register from 'components/register/register'
import login from 'components/login/login'
import usermsg from 'components/usermsg/usermsg'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
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
    },
    {
      path: '/laught',
      name: 'laught',
      component: laught
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/usermsg',
      name: 'usermsg',
      component: usermsg
    },
    { path: '*', redirect: '/home' }
  ]
})
