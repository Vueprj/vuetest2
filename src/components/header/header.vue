<template>
  <div class="header">
    <div class="title">
    <span class="title_img">
      <img src="./userImg.jpg" alt=" ">
    </span>
      <span class="title_text">{{title}}</span>
      <span class="title_more">
      <img src="./more.png" alt="dfefefew">
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
    },
    created() {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .title
      background: #18B4ED
      line-height: 60px
      height: 60px
      .title_img
        width: 40%
        padding-left: 10px;
        float: left
        font-size: 0
        img
          width: 50px
          height: 50px
          vertical-align: middle
          border-radius: 50%
      .title_text
        text-align: center
        display: inline-block
        font-size: 18px
      .title_more
        width: 40%
        float: right
        text-align: right
        img
          width: 40px
          height: 40px
          vertical-align: middle
          padding-right: 10px
</style>
