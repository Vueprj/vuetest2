<template>
  <div id="app">
    <!--<v-header></v-header>-->
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import store from './vuex/store'

  export default {
    data() {
      return {
        fatherTitle: ''
      }
    },
    computed: {
      jobdata() {
        return store.state.jobdata
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer
    },
    created() {
      this.$router.push('/home')
//      this.$ajax.get('http://127.0.0.1/plTest/public/index.php/admin/admin/createParam').then(function (response) {
//        console.log(response.data)
//      })
//      this.$http.get('http://127.0.0.1/plTest/public/index.php/admin/admin/createParam').then((response) => {
//        response = response.body
//        store.commit('setusermsg', response)
//      }, response => {
//        alert('请求失败')
//      })
    },
    methods: {
      reciveTitle(data) {
        console.log(data)
      },
      change() {
        console.log(store.state.msg)
        // this.msg = 'jhahahaha'
        store.commit('setmsg', '5555')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin-bottom 50px
    height: auto
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
