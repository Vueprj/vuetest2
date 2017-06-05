import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 谁要维护的状态
const state = {
  islogin: false,  // 判断登录状态
  usermsg: {}, // 存放个人信息
  msg: '成功来到store',
  jobmsg: [] // 工作信息
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
  },
  getjob(state) {
    // axios({
    //   methods: 'get',
    //   url: 'http://127.0.0.1/plTest/public/index.php/index/index/getjob',
    //   data: state.jobmsg
    // })
    axios.get('http://127.0.0.1/plTest/public/index.php/index/index/getjob')
      .then(function(response) {
        state.jobmsg = response.data
        console.log(response.data)
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
const actions = {
  getjob (context) {
    context.commit('getjob')
  }
}
// const action = {
//
// }
export default new Vuex.Store({
  state,
  mutations,
  actions
})
