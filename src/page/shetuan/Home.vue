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
            <mu-tab to="/shetuan?tab=new" class="tab" value="new" title="最新活动"/>
            <mu-tab to="/shetuan?tab=best" class="tab" value="best" title="活动精选"/>
            <mu-tab to="/shetuan?tab=album" class="tab" value="album" title="活动相册"/>
            <mu-tab to="/shetuan?tab=member" class="tab" value="member" title="成员"/>
        </mu-tabs>
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
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      activeTab: 'new'
    }
  },
  methods: {
    handleTabChange (val) {
      console.log(this.$route.query)
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    },
    goBack () {
      this.$router.back()
    }
  },
  beforeMount: function () {
    console.log(this.$route.query.tab)
    this.activeTab = this.$route.query.tab
  }
}
</script>
<style scoped>
    .header-left{
        text-align: left;
    }
    .tabs{
        background: #fafafa;
    }
    .tab{
        color: #757575;
    }
    .mu-tab-active{
        color: #7e57c2;
    }
</style>
