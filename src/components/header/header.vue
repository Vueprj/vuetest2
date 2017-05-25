<template>
  <div class="header">
    <div class="title">
    <span class="title_img">
      <img src="./6f836836acaf2edda58049238c1001e938019314.jpg" alt="">
    </span>
      <span class="title_text">{{title}}</span>
      <span class="title_more">
      <img src="./more.png" alt="">
    </span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        title: '主页'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .title
      background: #18B4ED
      line-height: 70px
      height: 70px
      .title_img
        width: 40%
        padding-left: 10px;
        float: left
        img
          width: 60px
          height: 60px
          vertical-align: middle
          border-radius: 50%
      .title_text
        text-align: center
        display: inline-block
        font-size: 18px
      .title_more
        width: 40%
        float: right
        img
          width: 40px
          height: 40px
          vertical-align: middle
          padding-right: 10px
</style>
