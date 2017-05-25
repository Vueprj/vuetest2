<template>
<div id="app">
  <v-header></v-header>
  <div class="weui-tabbar tab">
    <router-link :to="{name: 'home'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="./assets/img/home.png" alt="">
      </div>
      <p class="weui-tabbar__label">主页</p>
    </router-link>
    <router-link :to="{name: 'find'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="./assets/img/find.png" alt="">
      </div>
      <p class="weui-tabbar__label">发现</p>
    </router-link>
    <router-link :to="{name: 'laught'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="./assets/img/laught.png" alt="">
      </div>
      <p class="weui-tabbar__label">笑话</p>
    </router-link>
    <router-link :to="{name: 'mine'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <img src="./assets/img/mine.png" alt="">
      </div>
      <p class="weui-tabbar__label">我的</p>
    </router-link>
  </div>
  <router-view :main="main"></router-view>
</div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  data() {
    return {
      main: {}
    }
  },
  components: {
    'v-header': header
  },
  created() {
    this.$router.push('/home')
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

  .router-link-active
    background: #90B8F8
    border-radius: 10%
    transition: all linear 0.8s
    p
      color:blue

</stylus>
