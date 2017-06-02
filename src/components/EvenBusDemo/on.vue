<template>
    <div class="">
    </div>
</template>

<script type="text/javascript">
  import Bus from '../bus.js'
  export default {
    data() {
      return {}
    },
    created() {
      Bus.$on('getTarget', target => {
        console.log(target)
      })
    }
  }
</script>

<stylus lang="stylus" rel="stylesheet/stylus">

</stylus>
