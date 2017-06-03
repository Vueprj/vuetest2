import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 谁要维护的状态
const state = {
  islogin: false,  // 判断登录状态
  usermsg: {}, // 存放个人信息
  msg: '成功来到store'
}
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  setmsg (state, msg) {
    console.log(msg)
    state.msg = msg
    console.log(state.msg)
  },
  setusermsg (state, obj) {
    console.log(obj)
    state.usermsg = obj
  },
  loginok (state) {
    state.islogin = true // 登录成功，修改状态
  },
  loginerro (state) {
    state.islogin = false // // 退出登录，修改状态
  }
}
// const action = {
//
// }
export default new Vuex.Store({
  state,
  mutations
})
