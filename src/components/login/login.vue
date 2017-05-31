<template>
  <div class="login">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">qq</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号">
        </div>
      </div>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="tel" placeholder="请输入手机号">
        </div>
        <div class="weui-cell__ft">
          <button class="weui-vcode-btn">获取验证码</button>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">日期</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="date" value="">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">时间</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="datetime-local" value="" placeholder="">
        </div>
      </div>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入验证码">
        </div>
        <div class="weui-cell__ft">
          <img class="weui-vcode-img" src="" alt=" ">
        </div>
      </div>
      <div class="weui-cells__title">文本域</div><div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
          <div class="weui-textarea-counter"><span>0</span>/200</div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {}
    },
    created() {
//      var tle = this.$route.query
//      console.log(tle)
    }
  }
</script>

<stylus lang="stylus" rel="stylesheet/stylus">

</stylus>
