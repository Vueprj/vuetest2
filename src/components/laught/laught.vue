<template>
  <div class="laught">
    <div class="find">
      <mu-select-field v-model="search" multiple label="选择你要找的">
        <mu-menu-item value="1" title="月租低于500"/>
        <mu-menu-item value="2" title="月租500-1500"/>
        <mu-menu-item value="3" title="与人合租"/>
        <mu-menu-item value="4" title="豪华单间"/>
        <mu-menu-item value="5" title="朝九晚五的好工作"/>
        <mu-menu-item value="6" title="月薪1W"/>
      </mu-select-field>
    </div>
    <div class="tuijian">
        <div class="title">
          <h1 style="color: indigo">热门工作</h1>
        </div>
        <div class="job" v-for="items in goodjobmsg">
          <mu-list v-for="(item, index) in items">
            <h2>{{item.company}}</h2>
            <p>{{item.job}}</p>
          </mu-list>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import store from '../../vuex/store'

  export default {
    props: {
      main: {
        type: Object
      }
    },
    created() {
      this.goodjob()
    },
    data() {
      return {
        search: []
      }
    },
    mouted() {
      console.log(store.state.goodjob)
    },
    computed: {
      goodjobmsg() {
        return store.state.goodjob
      },
      housemsg() {
        return store.state.housemsg
      }
    },
    methods: {
      goodjob() {
        console.log('获取热门的工作')
        setTimeout(() => {
          this.getjob()
        })
      },
      goodhouse() {
        console.log('获取热门的房子')
        setTimeout(() => {
          this.gethouse()
        })
      },
      ...mapActions([
        'getjob',
        'refreshjob'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .laught
    .find
      .mu-text-field
        width 100%
    .tuijian
      text-align center
      .job
        .mu-list
          border-bottom 1px #CECECE solid
      h2
        color orangered
      p
       color #3cc51f
</style>
