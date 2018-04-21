<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-card-header class="header-left" title="莘莘团" subTitle="莘莘团一个专注于校园生活的社区圈子">
            <mu-avatar src="/static/images/water-plant.jpg" slot="avatar"/>
        </mu-card-header>
        <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
            <mu-tab class="tab" value="best" title="活动精选"/>
            <mu-tab class="tab" value="new" title="最新活动"/>
            <mu-tab class="tab" value="album" title="活动相册"/>
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
  name: 'shetuan',
  data () {
    return {
      activeTab: 'new'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    },
    goBack () {
      this.$router.back()
    },
    getData () {
      this.activeTab = 'new'
      // console.log(this.$route.params)
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
