<template>
  <div class="home">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" @active="findWork" title="找工作"/>

    </mu-tabs>
    <scroller class="content"
              height="100%"
              :on-refresh="refresh"
              :on-infinite="infinite">
      <div v-if="activeTab === 'tab1'">
        <!-- content goes here -->
        <div v-for="items in jobmsg">
          <mu-list v-for="(item, index) in items" :value="index" @change="handleChange">
            <mu-list-item  toggleNested nestedListClass :open="false">
              {{item.job}}
              <mu-list-item :value="index" slot="nested" class="it">
                <mu-list-item>
                  <div class="list">
                    <h2>{{item.company}}</h2>
                    <p class="money">薪金：{{item.min}} - {{item.max}}</p>
                    <p class="date">工作地点：{{item.adress}}</p>
                    <p class="date">发布时间：{{item.date}}</p>
                  </div>
                </mu-list-item>
              </mu-list-item>
            </mu-list-item>
          </mu-list>
        </div>
      </div>
    </scroller>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .home
    .content
      position fixed
      margin-top 48px
      .list
        position relative
        h2
          color orangered
          font-weight bold
  .demo-refresh-container {
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }

</style>

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
    },
    mouted() {
      this.trigger = this.$el
    },
    methods: {
      handleChange (val) {
        this.value = val
      },
      refreshText() {
        alert(2)
      },
      // 下拉刷新数据
      refresh(done) {
        console.log('下拉刷新！')
        setTimeout(() => {
          this.refreshjob()
        }, 1500)
        done()
      },
      // 上拉加载数据
      infinite(done) {
        console.log('加载ok！')
        setTimeout(() => {
          this.getjob()
          done()
        }, 1500)
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
        'getjob',
        'refreshjob'
      ])
    }
  }
</script>

