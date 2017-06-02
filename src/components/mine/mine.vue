<template>
  <div class="mine">
    <div class="user"></div>
    <div class="messge">
      <div class="userImg">
        <div class="content-img">
          <img :src="userData.img" alt="" style="width: 100%">
          <img src="../header/userImg.jpg" alt="" style="width: 100%" v-if="!userData.img">
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>用户昵称:</p>
          </div>
          <router-link :to="{name : 'login',query: title } ">
            <div class="weui-cell__ft" @click="setTitle">{{ userName }}</div>
          </router-link>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>个性签名:</p>
          </div>
          <router-link :to="{name : 'find' }">
            <div class="weui-cell__ft">{{ userData.details }}</div>
          </router-link>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>用户昵称:</p>
          </div>
          <div class="weui-cell__ft">{{userData.adress}}-----{{userData.name}}</div>
        </div>
      </div>
    </div>
    <div class="d" >
      <li>
        {{ msg }}----{{text}}
      </li>
      <li v-if="show">555</li>
      <button @click="showmsg" style="width:30px; height:30px"></button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import bus from '../bus.js'
  export default {
    props: {
      main: {}
    },
    data() {
      return {
        userData: {},
        userName: '你还没有有登录',
        title: '登录',
        show: false,
        text: '',
        msg: '1'
      }
    },
    created() {
//      bus.$on('usermessage', (usermsg) => {
//        this.getData()
//        console.log(this.msg)
//        console.log(usermsg.name)
//        this.msg = usermsg.name
//        console.log('mine接收到的usermsg')
//        console.log(this.msg)
//        console.log('全局的usermsg')
//        this.getData()
//      })
    },
    mounted() {
     console.log('mine刚进入的userData')
      bus.$on('usermessage', this.getData())
    },
    computed: {
      msg: function () {
        console.log(2)
      }
    },
    watch: {
      userData: function (val, oldVal) {
        console.log()
      }
    },
    methods: {
      showmsg(msg) {
        console.log('去修改值')
        console.log(msg)
        this.msg = '55555555555555'
//      console.log(1)
      },
      setTitle() {
//      console.log(1)
      },
      getData() {
        this.$http.get('http://127.0.0.1/plTest/public/index.php/admin/admin/mine').then((response) => {
            response = response.body
            console.log(response)
            this.userName = response.name
            this.userData = response
          }, response => {
            console.log('获取用户信息失败！')
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .messge
    .userImg
      padding 20px 40px 10px 40px
      .content-img
        font-size: 0
        display: block;
        overflow: hidden;
        border 3px solid coral
        border-radius 20px
</style>
