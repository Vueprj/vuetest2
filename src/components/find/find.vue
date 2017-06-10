<template>
  <div class="find">

    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" @active="findWork" title="找好房"/>
    </mu-tabs>
    <scroller class="content"
              height="100%"
              :on-refresh="refresh"
              :on-infinite="infinite">
      <div v-if="activeTab === 'tab1'">
        <!-- content goes here -->
        <div v-for="items in housemsg">
          <mu-list v-for="(item, index) in items" :value="index" @change="handleChange">
            <mu-list-item  toggleNested nestedListClass :open="false">
              {{item.title}}
              <mu-list-item  slot="nested" class="it">
                <div class="list">
                  <h2>详细：{{item.title}}</h2>
                  <p class="money">地点：{{item.miaoshu}}</p>
                  <p class="money">地点：{{item.adress}}</p>
                  <p class="date">月租：{{item.money}}元</p>
                  <p class="date">联系方式：{{item.tellphone}}</p>
                </div>
              </mu-list-item>

            </mu-list-item>
          </mu-list>
        </div>
      </div>
    </scroller>
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
      housemsg() {
        return store.state.housemsg
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
          this.refreshhouse()
          done()
        }, 1500)
      },
      // 上拉加载数据
      infinite(done) {
        console.log('加载ok！')
        setTimeout(() => {
          this.gethouse()
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
        'gethouse',
        'refreshhouse'
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

  .find
    .content
      position fixed
      margin-top 48px
      .list
        position relative
        h2
          color orangered
          font-weight bold
</style>
