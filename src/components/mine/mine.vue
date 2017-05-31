<template>
  <div class="mine">
    <div class="user"></div>
    <div class="messge">
      <div class="userImg">
        <div class="content-img">
          <img :src="userData.img" alt="" style="width: 100%">
          <img src="../header/userImg.jpg" alt="" style="width: 100%" v-if="!userData.img">
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>用户昵称:</p>
          </div>
          <router-link :to="{name : 'login',query: title } ">
          <div class="weui-cell__ft" @click="setTitle">{{userName}}</div>
          </router-link>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>个性签名:</p>
          </div>
          <router-link  :to="{name : 'find' }">
            <div class="weui-cell__ft">{{userData.details}}</div>
          </router-link>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>用户昵称:</p>
          </div>
          <div class="weui-cell__ft">{{userName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    props: {
      main: {}
    },
    data() {
      return {
        userData: {},
        userName: '你还没有登录',
        title: '登录'
      }
    },
    created() {
      this.$http.get('http://127.0.0.1/plTest/public/index.php/admin/admin/mine').then((response) => {
          response = response.body
          console.log(response)
          this.userName = response.name
          this.userData = response
        }, response => {
          console.log('获取用户信息失败！')
        }
      )
    },
    methods: {
      setTitle() {
//      console.log(1)
        this.$emit('sendTitle', '登录')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .messge
    .userImg
      padding 20px 40px 10px 40px
      .content-img
        font-size: 0
        display: block;
        overflow: hidden;
        border 3px solid coral
        border-radius 20px
</style>
