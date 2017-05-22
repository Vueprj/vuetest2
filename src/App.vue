<template>
<div id="app">
  <div class="footer">
  </div>
  <div class="weui-tabbar">
    <router-link :to="{name: 'header'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="https://weui.io/0.4.x/images/icon_nav_button.png" alt="">
      </div>
      <p class="weui-tabbar__label">微信</p>
    </router-link>
    <router-link :to="{name: 'find'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="https://weui.io/0.4.x/images/icon_nav_button.png" alt="">
      </div>
      <p class="weui-tabbar__label">发现</p>
    </router-link>
    <router-link :to="{name: 'mine'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="https://weui.io/0.4.x/images/icon_nav_button.png" alt="">
      </div>
      <p class="weui-tabbar__label">我的</p>
    </router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      main: {}
    }
  },
  created() {
    this.$http.get('http://127.0.0.1/plTest5.05/public/index.php/admin/admin/createParam').then((response) => {
      response = response.body
      this.main = response
      console.log(this.main)
    }, response => {
      alert('请求失败')
    })
  }
}
</script>

<stylus lang="stylus" rel="stylesheet/stylus">
</stylus>
