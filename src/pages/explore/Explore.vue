<template>
<div>
    <mu-tabs :value="activeTab"  @change="handleTabChange">
        <mu-tab value="recommend" title="推荐"/>
        <mu-tab value="hot" title="热点"/>
        <mu-tab value="topic" title="专题"/>
    </mu-tabs>
    <div style="width: 100%;overflow-x: scroll;">
        <mu-bottom-nav>
            <mu-bottom-nav-item value="school" title="高校圈" icon="school"/>
            <mu-bottom-nav-item value="group" title="社团" icon="group"/>
            <mu-bottom-nav-item value="group" title="热议" icon="insert_comment"/>
            <mu-bottom-nav-item value="question_answer" title="问答" icon="question_answer"/>
        </mu-bottom-nav>

    </div>
</div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
      activeTab: 'recommend'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
</style>
