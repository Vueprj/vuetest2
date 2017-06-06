<template>
  <div class="home">

      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" @active="findWork" title="找工作"/>
        <mu-tab value="tab2" @active="findHouse" title="找房子"/>
      </mu-tabs>
    <scroller class="content"
      :on-refresh="refresh"
      :on-infinite="infinite">
      <div v-if="activeTab === 'tab1'">
        <!-- content goes here -->
        <h1 v-for="item in jobmsg">
          {{item.job}}
        </h1>
      </div>
    </scroller>

  <div v-if="activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  </div>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import store from '../../vuex/store'

  export default {
    data () {
      return {
        activeTab: 'tab1',
        refreshing: false,
        trigger: null
      }
    },
    computed: {
      jobmsg() {
        return store.state.jobmsg
      }
    },
    created() {
      this.getjob()
      this.jobdata = store.state.jobdata
    },
    mouted() {
      console.log(this.jobdata)
      this.trigger = this.$el
    },
    methods: {
      refreshText() {
        alert(2)
      },
      // 上拉刷新数据
      refresh() {
//        alert(1)
      },
      // 下拉加载数据
      infinite() {
//        alert(22)
      },
      findWork() {
      },
      findHouse() {

      },
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
      },
      ...mapActions([
        'getjob'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.home*/
  /*.navtab*/
  .demo-refresh-container {
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }
  .home
    .content
      position fixed
      margin-top 48px
</style>
