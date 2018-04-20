<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-card-header class="header-left" title="莘莘团" subTitle="莘莘团一个专注于的学社团的圈子社区">
            <mu-avatar src="/static/images/water-plant.jpg" slot="avatar"/>
        </mu-card-header>
        <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
            <mu-tab to="/shetuan/new" class="tab" value="new" title="最新活动"/>
            <mu-tab to="/shetuan/best" class="tab" value="best" title="活动精选"/>
            <mu-tab to="/shetuan/album" class="tab" value="album" title="活动相册"/>
            <mu-tab to="/shetuan/member" class="tab" value="member" title="成员"/>
        </mu-tabs>
        <div v-if="activeTab === 'new'">
            <mu-list>
                <mu-list-item>
                    <mu-icon slot="left" value="inbox"/>
                </mu-list-item>
            </mu-list>
        </div>
        <div v-if="activeTab === 'best'">
            <mu-flexbox class="mt8" orient="vertical">

                <mu-flexbox-item>
                    <img src="/static/hats.jpg"/>

                </mu-flexbox-item>
                <mu-flexbox-item>
                    <img src="/static/hats.jpg"/>
                </mu-flexbox-item>
                <mu-flexbox-item>
                    <img src="/static/hats.jpg"/>

                </mu-flexbox-item>
            </mu-flexbox>
        </div>
        <div v-if="activeTab === 'album'">
            <mu-list>
                <mu-list-item title="Inbox">
                    <mu-icon slot="left" value="inbox"/>
                </mu-list-item>
            </mu-list>
        </div>
        <div v-if="activeTab === 'member'">
            <h2>Tab Three</h2>
            <p>
                成员
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      // activeTab: 'album'
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
    favorite () {}
  },
  computed: {
    activeTab: {
      get () {
        return this.$route.params.tab
      },
      set (activeTab) {}
    }
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
