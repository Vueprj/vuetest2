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
        fatherTitle: '',
        jsona: {}
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
//      const that = this
//      this.$ajax.get('http://sudada.applinzi.com/phpdata/conn.php').then(function (response) {
//        that.jsona = response.data
//        console.log()
//      })
//      this.$http.get('http://sudada.applinzi.com/phpdata/conn.php').then((response) => {
//        response = response.body
//        store.commit('setusermsg', response)
//      }, response => {
//        alert('请求失败')
//      })
    },
    mouted() {
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


</style>
