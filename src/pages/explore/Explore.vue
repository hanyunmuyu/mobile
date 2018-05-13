<template>
<div>
    <mu-tabs :value="activeTab"  @change="handleTabChange">
        <mu-tab value="recommend" title="推荐"/>
        <mu-tab value="hot" title="热点"/>
        <mu-tab value="topic" title="专题"/>
    </mu-tabs>
    <mu-text-field style="text-align: left;width: 100%" icon="search" hintText="同学/社团/高校"/>
    <mu-paper>
        <mu-bottom-nav @change="handleChange">
            <mu-bottom-nav-item value="school" title="校园" icon="school"/>
            <mu-bottom-nav-item value="group" title="社团" icon="group"/>
            <mu-bottom-nav-item value="group" title="热议" icon="insert_comment"/>
            <mu-bottom-nav-item value="qa" title="问答" icon="question_answer"/>
        </mu-bottom-nav>
    </mu-paper>
    <mu-list>
        <mu-list-item style="text-align: left" v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
            <mu-avatar src="/static/images/morning.jpg" slot="leftAvatar"/>
            <span slot="describe">
                <span style="color: rgba(0, 0, 0, .87)">寒云 ：</span>
                周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                <!--<p><mu-icon value="favorite" :size="16"/></p>-->
            </span>
            <mu-divider inset/>
        </mu-list-item>
    </mu-list>
</div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
      activeTab: 'recommend',
      bottomNav: '1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleChange (val) {
      this.bottomNav = val
      if (val === 'qa') {
        this.$router.push('/qa/index')
      } else if (val === 'school') {
        this.$router.push('/school')
      }
    }
  }
}
</script>

<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
</style>
