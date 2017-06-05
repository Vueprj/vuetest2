<template>
  <div class="home">
    <div class="navtab">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" @active="findWork" title="找工作"/>
        <mu-tab value="tab2" @active="findHouse" title="找房子"/>
      </mu-tabs>
      <div v-if="activeTab === 'tab1'">
        <div class="demo-refresh-container">
          <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
          <mu-list>
            <template v-for="item in jobmsg">
              <mu-list-item disableRipple :title="item.company"/>
              <mu-divider/>
            </template>
          </mu-list>
        </div>
      </div>
      <div v-if="activeTab === 'tab2'">
        <h2>Tab Two</h2>
        <p>
          这是第二个 tab
        </p>
      </div>
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
      refresh () {
        alert(11)
        this.refreshing = true
        setTimeout(() => {

        }, 2000)
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
  .demo-refresh-container{
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }
</style>
