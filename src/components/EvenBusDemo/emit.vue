<template>
  <div class="click" @click.stop.prevent="doClick($event)"></div>
</template>

<script type="text/javascript">
  import Bus from '../bus.js'
  export default {
    data() {
      return {}
    },
    methods: {
      addCart(event) {
        Bus.$emit('getTarget', event.target)
      }
    }
  }
</script>

<stylus lang="stylus" rel="stylesheet/stylus">

</stylus>
