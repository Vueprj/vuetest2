import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 谁要维护的状态
const state = {
  islogin: false,  // 判断登录状态
  usermsg: {}, // 存放个人信息
  msg: '成功来到store',
  jobmsg: [], // 工作信息,
  housemsg: [], // 房子信息
  goodjob: [],
  goodhouse: [],
  limit: 0,
  limit1: 0
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
  // 加载更多
  getjob(state) {
    // axios({
    //   methods: 'get',
    //   url: 'http://127.0.0.1/plTest/public/index.php/index/index/getjob',
    //   data: state.jobmsg
    // })

    axios.get('http://sudada.applinzi.com/pltest/public/index.php/index/index/getjob',
      {
        params: {
          limit: state.limit
        }
      }).then(function (response) {
//        alert(1)
//        console.log(response)
      state.limit++
      state.goodjob.push(response.data)
      console.log(state.goodjob)
      state.jobmsg.push(response.data)
    })
      .catch(function (err) {
        console.log(err)
      })
  },
  // 刷新操作
  refreshjob(state) {
    state.jobmsg = []
    state.limit = 0
    axios.get('http://sudada.applinzi.com/pltest/public/index.php/index/index/getjob',
      {
        params: {
          limit: state.limit
        }
      }).then(function (response) {
      state.jobmsg.push(response.data)
    })
      .catch(function (err) {
        console.log(err)
      })
  },
  // 加载更多
  gethouse(state) {
    // axios({
    //   methods: 'get',
    //   url: 'http://127.0.0.1/plTest/public/index.php/index/index/getjob',
    //   data: state.jobmsg
    // })
    state.limit1++
    axios.get('http://sudada.applinzi.com/pltest/public/index.php/index/index/gethouse',
      {
        params: {
          limit: state.limit1
        }
      }).then(function (response) {
//        alert(1)
//        console.log(response)
      state.housemsg.push(response.data)
    })
      .catch(function (err) {
        console.log(err)
      })
  },
  // 刷新操作
  refreshhouse(state) {
    state.housemsg = []
    state.limit1 = 0
    axios.get('http://sudada.applinzi.com/pltest/public/index.php/index/index/gethouse',
      {
        params: {
          limit: state.limit1
        }
      }).then(function (response) {
      state.housemsg.push(response.data)
    })
      .catch(function (err) {
        console.log(err)
      })
  }
}
const actions = {
  getjob (context) {
    console.log(state.limit)
    context.commit('getjob')
  },
  refreshjob (context) {
    console.log(22222222)
    context.commit('refreshjob')
  },
  gethouse (context) {
    console.log(state.limit)
    context.commit('gethouse')
  },
  refreshhouse (context) {
    console.log(22222222)
    context.commit('refreshhouse')
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
