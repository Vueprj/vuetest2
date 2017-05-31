<template>
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
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        home: '../static/img/home_s.png',
        find: '../static/img/find.png',
        laught: '../static/img/laught.png',
        mine: '../static/img/mine.png'
      }
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
  .tab
    position fixed
    .router-link-active
      border-radius: 10%
      transition: all linear 0.8s
      .tab_p
          color: blue
</style>
