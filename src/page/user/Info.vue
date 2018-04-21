<template>
    <div>
        <div class="header">
            <mu-appbar title="寒云的主页">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
                <mu-icon-button :icon="icon" slot="right" @click="favorite"/>
            </mu-appbar>
        </div>
        <mu-card-header class="header-left" title="寒云" subTitle="夫勇者,卒然临之而不惊,无故加之而不怒.泰山崩于前而色不变,麋鹿行于左而目不瞬">
            <mu-avatar src="/static/images/water-plant.jpg" slot="avatar"/>
        </mu-card-header>
        <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
            <mu-tab class="tab" value="new" title="Ta的动态"/>
            <mu-tab class="tab" value="shetuan" title="Ta的社团"/>
            <mu-tab class="tab" value="class" title="Ta的班级"/>
            <mu-tab class="tab" value="friend" title="Ta的同学"/>
        </mu-tabs>
        <div v-if="activeTab === 'new'">
            <mu-list>
                <mu-list-item v-for="index in num" :key="index">
                    <div style="width: 100%;overflow: hidden;display: flex">
                        <div style="flex: 3">
                            <div class="header-left" @click.stop="userInfo(index)">
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
        <div v-if="activeTab === 'shetuan'">
            <mu-list>
                <mu-list-item v-for="index in 10" :key="index">
                    <div style="width: 100%;overflow: hidden;display: flex">
                        <div style="flex: 3">
                            <div class="header-left" @click.stop="userInfo(index)">
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
        <div v-if="activeTab === 'class'">
            <mu-list>
                <ul style="width: 100%;display: block">
                    <li style="width: 33%;display: block;float: left;margin-bottom: 15px" v-for="index in 35" :key="index" @click="userInfo(index)">
                        <div style="width: 100%;">
                            <mu-avatar :size=68 src="/static/images/avatar4.jpg" slot="avatar"/>
                        </div>
                        <div style="width: 100%;min-height: 16px;text-align: center">
                            寒云
                        </div>
                    </li>
                </ul>
            </mu-list>
        </div>
        <div v-if="activeTab === 'friend'">
            <mu-list>
                <ul style="width: 100%;display: block">
                    <li style="width: 33%;display: block;float: left;margin-bottom: 15px" v-for="index in 9" :key="index" @click="userInfo(index)">
                        <div style="width: 100%;">
                            <mu-avatar :size=68 src="/static/images/avatar4.jpg" slot="avatar"/>
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
  name: 'userInfo',
  data () {
    return {
      activeTab: 'new',
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      icon: 'favorite'
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
    favorite () {
      this.icon = this.icon === 'favorite_border' ? 'favorite' : 'favorite_border'
    },
    getData () {
      this.activeTab = 'new'
      console.log(this.$route.params.id)
      let id = this.$route.params.id
      let arr = []
      for (let i = 0; i < id; i++) {
        arr.push(i)
      }
      this.num = arr
    },
    userInfo (id) {
      this.$router.push('/user/info/' + id)
    }
  },
  beforeMount: function () {
    // 可以用tab来确定分享后显示的tab页面
    this.activeTab = this.$route.query.tab === undefined ? this.activeTab : this.$route.query.tab
  },
  watch: {
    '$route' (to, from) {
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
