<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
                <mu-icon-button icon="favorite" slot="right" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-card-header class="header-left" title="莘莘团" subTitle="莘莘团一个专注于的学社团的圈子社区">
            <mu-avatar src="/static/images/water-plant.jpg" slot="avatar"/>
        </mu-card-header>
        <mu-tabs class="tabs" :value="activeTab" @change="handleTabChange">
            <mu-tab class="tab" value="tab1" title="最新活动"/>
            <mu-tab class="tab" value="tab2" title="活动精选"/>
            <mu-tab class="tab" value="tab3" title="活动相册"/>
            <mu-tab class="tab" value="tab4" title="成员"/>
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
            <h2>Tab One</h2>
            <p>
                这是第一个 tab
            </p>
        </div>
        <div v-if="activeTab === 'tab2'">
            <h2>Tab Two</h2>
            <p>
                这是第二个 tab
            </p>
        </div>
        <div v-if="activeTab === 'tab3'">
            <h2>Tab Three</h2>
            <p>
                这是第三个 tab
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      activeTab: 'tab1'
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
    }
  }
}
</script>
<style>
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
