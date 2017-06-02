<template>
  <div class="login">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">账号：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入账号" v-model="user">
        </div>
      </div>
      <div class="weui-cell ">
        <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入登录密码" v-model="password"></div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">记住密码</div>
        <div class="weui-cell__ft">
          <input class="weui-switch" type="checkbox">
        </div>
      </div>
      <div class="weui-cell">
        <label v-if="isfalse" style="color: red">你输入的账号或者密码有误，请重新输入...</label>
      </div>
      <a href="javascript:;" @click="check" class="weui-btn weui-btn_primary btn" :usermsg="usermsg">页面主操作 Normal</a>
    </div>
  </div>
</template>

<script type="text/javascript">
  import bus from '../bus.js'
  export default {
    data() {
      return {
        user: '',
        password: '',
        isfalse: false,
        usermsg: {}
      }
    },
    created() {
//      var tle = this.$route.query
//      console.log(tle)
    },
    methods: {
      check() {
//        console.log(this.user)
//        console.log(this.password)
        this.$http.get('http://127.0.0.1/plTest/public/index.php/admin/admin/login', {
          params: {
            user: this.user,
            password: this.password
          }
        }).then(response => {
            if (response.body !== 'no') {
              this.usermsg = response.body
              console.log('login传递的this.usermsg')
              console.log(this.usermsg)
              bus.$emit('usermessage', this.usermsg)
              this.$router.push({name: 'mine'})
            } else {
              this.isfalse = true
            }
          }, response => {
            console.log('404')
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    margin-top 30%
    .weui-cells_form
      .btn
        margin-top 30px
</style>
