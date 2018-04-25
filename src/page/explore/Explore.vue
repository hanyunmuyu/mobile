<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
            </mu-appbar>
        </div>
        <mu-list>
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <mu-list-item @click="go" v-for="(item,index) in dataList" :key="index">
                <div style="width: 100%;overflow: hidden;display: flex;min-height: 100px">
                    <div style="flex: 3">
                        <div class="header-left"  @click.stop="userInfo(item.userId)">
                            <mu-avatar :size=20 :src="item.avatar" slot="avatar"/>
                            <span>{{item.username}}</span>
                        </div>
                        <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                            <h1 style="font-size: 110%">{{item.title}}</h1>
                            <div style="margin-top: 10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2; ">{{item.description}}</div>
                            <div style="margin-top: 10px;font-size: 80%">点击：{{item.click_num}}   收藏：{{item.favorite_num}}</div>
                        </div>
                    </div>
                    <div style="flex: 1;height: 50px">
                        <img style="width: 100%;" v-lazy="item.img_a"/>
                    </div>
                </div>
            </mu-list-item>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      dataList: [],
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      exploreCurrentPage: 1
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    go () {
      this.$router.push('/detail')
      this.$store.state.footerActive = 'home'
    },
    userInfo (id) {
      this.$router.push('/user/info/' + id)
    },
    refresh () {
      setTimeout(() => {
        this.refreshing = false
      }, 3000)
      if (!this.refreshing) {
        this.refreshing = true
        this.getData()
      }
    },
    loadMore () {
      setTimeout(() => {
        this.loading = false
      }, 3000)
      if (!this.loading) {
        this.loading = true
        this.syncDataList()
      }
    },
    getData () {
      this.exploreCurrentPage = 1
      this.$service.getExploreList(this.$api.explore, {page: this.exploreCurrentPage}).then((r) => {
        if (r.code === 2000) {
          this.dataList = r.data.data
          this.exploreCurrentPage += 1
        }
      })
    },
    syncDataList () {
      this.$service.sybcExploreList(this.$api.explore, {page: this.exploreCurrentPage}).then((r) => {
        if (r.code === 2000) {
          let data = r.data.data
          for (let index in data) {
            this.dataList.push(data[index])
          }
          this.exploreCurrentPage += 1
        }
      })
    }
  },
  mounted () {
    this.getData()
    this.trigger = this.$el
    this.scroller = this.$el
  }
}
</script>
<style lang="less">
    .header {
        /*position: fixed;*/
        top: 0;
        width: 100%;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .popup-bottom {
        width: 100%;
        max-width: 375px;
    }
    .header-left {
        text-align: left;
    }
</style>
