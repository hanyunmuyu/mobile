<template>
    <div>
        <div class="header">
            <mu-appbar title="轮滑社团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
                <mu-icon-button :icon="icon" slot="right" @click="favorite"/>
            </mu-appbar>
        </div>
        <mu-card-header class="header-left" :title="detail.name" :subTitle="detail.description">
            <mu-avatar :src="detail.logo" slot="avatar"/>
        </mu-card-header>
        <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
            <mu-tab class="tab" value="best" title="活动精选"/>
            <mu-tab class="tab" value="new" title="最新活动"/>
            <!--<mu-tab class="tab" value="album" title="活动相册"/>-->
            <mu-tab class="tab" value="member" title="成员"/>
        </mu-tabs>
        <div v-if="activeTab === 'best'">
            <mu-list>
                <mu-list-item v-for="index in 10" :key="index">
                    <div style="width: 100%;overflow: hidden;display: flex">
                        <div style="flex: 3">
                            <div class="header-left">
                                <mu-avatar :size=20 src="/static/images/water-plant.jpg" slot="avatar"/>
                                <span>hanyun</span>
                            </div>
                            <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                                <h1 style="font-size: 110%">钟楼广场进行轮滑报验开始了</h1>
                                <div style="margin-top: 10px;font-size: 90%">预计下午进行轮滑表演，欢迎大家一起来观赏</div>
                                <div style="margin-top: 10px;font-size: 80%">点击：100 收藏：10</div>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <img style="width: 100%" src="/static/hats.jpg"/>
                        </div>
                    </div>
                </mu-list-item>
            </mu-list>
        </div>
        <div v-if="activeTab === 'new'">
            <mu-list>
                <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
                <mu-list-item v-for="(item,index) in clubNewActivityList"  :to="'/club/activity/detail/'+item.id" :key="index">
                    <div style="width: 100%;overflow: hidden;display: flex">
                        <div style="flex: 3">
                            <div class="header-left">
                                <mu-avatar :size=20 src="/static/images/water-plant.jpg" slot="avatar"/>
                                <span>hanyun</span>
                            </div>
                            <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                                <h1 style="font-size: 110%">{{item.title}}</h1>
                                <div style="margin-top: 10px;font-size: 90%">{{item.content}}</div>
                                <div style="margin-top: 10px;font-size: 80%">点击：100 收藏：10</div>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <img style="width: 100%" src="/static/hats.jpg"/>
                        </div>
                    </div>
                </mu-list-item>
                <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
            </mu-list>
        </div>
        <div v-if="activeTab === 'album'">
            <mu-list>
                <mu-list-item v-for="index in 10" :key="index">
                    <div style="width: 100%;overflow: hidden;display: flex">
                        <div style="flex: 3">
                            <div class="header-left">
                                <mu-avatar :size=20 src="/static/images/water-plant.jpg" slot="avatar"/>
                                <span>hanyun</span>
                            </div>
                            <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                                <h1 style="font-size: 110%">钟楼广场进行轮滑报验开始了</h1>
                                <div style="margin-top: 10px;font-size: 90%">预计下午进行轮滑表演，欢迎大家一起来观赏</div>
                                <div style="margin-top: 10px;font-size: 80%">点击：100 收藏：10</div>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <img style="width: 100%" src="/static/hats.jpg"/>
                        </div>
                    </div>
                </mu-list-item>
            </mu-list>
        </div>
        <div v-if="activeTab === 'member'">
            <mu-list>
                <mu-sub-header style="text-align: left">
                    管理员（10）
                </mu-sub-header>
                <ul style="width: 100%;display: block">
                    <li style="width: 33%;display: block;float: left;margin-bottom: 15px" v-for="index in 9" :key="index">
                        <div style="width: 100%;">
                            <mu-avatar :size=68 src="/static/images/avatar4.jpg" slot="avatar"/>
                        </div>
                        <div style="width: 100%;min-height: 16px;text-align: center">
                            寒云
                        </div>
                    </li>
                </ul>
            </mu-list>
            <mu-list>
                <mu-sub-header style="text-align: left">
                    关注的人（100）
                </mu-sub-header>
                <ul style="width: 100%;display: block">
                    <li style="width: 33%;display: block;float: left;margin-bottom: 15px" v-for="index in 20" :key="index">
                        <div style="width: 100%;">
                            <mu-avatar :size=68 src="/static/images/avatar1.jpg" slot="avatar"/>
                        </div>
                        <div style="width: 100%;min-height: 16px;text-align: center">
                            寒云
                        </div>
                    </li>
                </ul>
            </mu-list>
        </div>
    </div>
</template>

<script>
export default {
  name: 'club',
  data () {
    return {
      activeTab: 'new',
      icon: 'favorite',
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      clubNewActivityCurrentPage: 1,
      timer: null,
      clubNewActivityList: [],
      clubId: 0,
      detail: {}
    }
  },
  mounted () {
    this.trigger = this.$el
    this.scroller = this.$el
    this.clubId = this.$route.params.id
    this.getClubNewActivityList()
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      if (val === 'new') {
        if (this.clubNewActivityList.length <= 0) {
          this.getClubNewActivityList()
        }
      }
    },
    goBack () {
      this.$router.back()
    },
    favorite () {
      this.icon = this.icon === 'favorite_border' ? 'favorite' : 'favorite_border'
    },
    getData () {
      this.activeTab = 'new'
      // console.log(this.$route.params)
    },
    refresh () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.refreshing) {
        this.refreshing = true
        this.getClubNewActivityList()
      }
    },
    loadMore () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.loading) {
        this.loading = true
        this.syncClubNewActivityList()
      }
    },
    getClubNewActivityList () {
      this.clubNewActivityCurrentPage = 1
      this.$service.getClubNewActivity(this.$api.clubNewActivity, {page: this.clubNewActivityCurrentPage, clubId: this.clubId}).then((r) => {
        if (r.code === 2000) {
          this.clubNewActivityList = r.data.data
          this.detail = r.data.detail
          this.clubNewActivityCurrentPage += 1
        }
      })
    },
    syncClubNewActivityList () {
      this.$service.syncClubNewActivity(this.$api.clubNewActivity, {page: this.clubNewActivityCurrentPage, clubId: this.clubId}).then((r) => {
        if (r.code === 2000) {
          let tmp = []
          let data = r.data.data
          tmp = this.clubNewActivityList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.clubNewActivityList = tmp
          this.clubNewActivityCurrentPage += 1
        }
      })
    },
    clearTimer () {
      setTimeout(() => {
        this.loading = false
        this.refreshing = false
        clearTimeout(this.timer)
      }, 2000)
    }
  },
  beforeMount: function () {
    // 可以用tab来确定分享后显示的tab页面
    this.activeTab = this.$route.query.tab === undefined ? this.activeTab : this.$route.query.tab
  },
  watch: {
    '$route' (to, from) {
      console.log(to.params.id)
      console.log(from)
      this.getData()
    },
    clubNewActivityList (v1) {
      this.clearTimer()
    }
  }
}
</script>
<style scoped>
    .header-left {
        text-align: left;
    }

    .tabs {
        background: #fafafa;
    }

    .tab {
        color: #757575;
    }

    .mu-tab-active {
        color: #7e57c2;
    }
</style>
