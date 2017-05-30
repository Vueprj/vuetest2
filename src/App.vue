<template>
  <div id="app">
    <v-header></v-header>
    <div class="weui-tabbar tab">
      <router-link :to="{name: 'home'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <img :src="home" alt="">
        </div>
        <p class="weui-tabbar__label tab_p">主页</p>
      </router-link>
      <router-link :to="{name: 'find'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon tab_p">
          <img :src="find" alt="">
        </div>
        <p class="weui-tabbar__label tab_p">发现</p>
      </router-link>
      <router-link :to="{name: 'laught'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <img :src="laught" alt="">
        </div>
        <p class="weui-tabbar__label tab_p">笑话</p>
      </router-link>
      <router-link :to="{name: 'mine'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <img :src="mine" alt="">
        </div>
        <p class="weui-tabbar__label tab_p">我的</p>
      </router-link>
    </div>
    <transition name="slide-fade">
      <router-view :main="main"></router-view>
    </transition>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    data() {
      return {
        main: {},
        home: '/static/img/home_s.png',
        find: './static/img/find.png',
        laught: '/static/img/laught.png',
        mine: '/static/img/mine.png'
      }
    },
    components: {
      'v-header': header
    },
    created() {
      this.$router.push('/home')
//    this.$http.get('http://127.0.0.1/plTest5.05/public/index.php/admin/admin/createParam').then((response) => {
//      response = response.body
//      this.main = response
//      console.log(this.main)
//    }, response => {
//      alert('请求失败')
//    })
    },
    methods: {
      fetchData () {
        console.log(this.$route.path)
        if (this.$route.path !== '/home') {
          this.home = '/static/img/home.png'
        } else {
          this.home = '/static/img/home_s.png'
        }
        if (this.$route.path !== '/find') {
          this.find = '/static/img/find.png'
        } else {
          this.find = '/static/img/find.png'
        }
        if (this.$route.path !== '/laught') {
          this.laught = '/static/img/laught.png'
        } else {
          this.laught = '/static/img/laught.png'
        }
        if (this.$route.path !== '/mine') {
          this.mine = '/static/img/mine.png'
        } else {
          this.mine = '/static/img/mine_s.png'
        }
      }
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      position fixed
      .router-link-active
        border-radius: 10%
        transition: all linear 0.8s
        .tab_p
          color: blue

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
