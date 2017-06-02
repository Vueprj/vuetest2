<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
    <transition name="slide-fade">
      <router-view :main="main"></router-view>
    </transition>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

  export default {
    data() {
      return {
        main: {},
        fatherTitle: ''
      }
    },
    computed: {
      fatherSetTitle(data) {
        console.log(data)
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer
    },
    created() {
      this.$router.push('/home')
      this.$http.get('http://127.0.0.1/plTest/public/index.php/admin/admin/createParam').then((response) => {
        response = response.body
        this.main = response
        console.log(this.main)
      }, response => {
        alert('请求失败')
      })
    },
    methods: {
      reciveTitle(data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
