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
            <mu-tab class="tab" value="new" title="最新活动"/>
            <mu-tab class="tab" value="best" title="活动精选"/>
            <mu-tab class="tab" value="album" title="活动相册"/>
            <mu-tab class="tab" value="member" title="成员"/>
        </mu-tabs>
        <div v-if="activeTab === 'new'">
            <h2>Tab One</h2>
            <p>
                最新活动
            </p>
        </div>
        <div v-if="activeTab === 'best'">
            <h2>Tab Two</h2>
            <p>
                活动精选
            </p>
        </div>
        <div v-if="activeTab === 'album'">
            <h2>Tab Three</h2>
            <p>
                相册
            </p>
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
      activeTab: 'best'
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
