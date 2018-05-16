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
            <mu-bottom-nav-item value="school" title="高校" icon="school"/>
            <mu-bottom-nav-item value="club" title="社团" icon="group"/>
            <mu-bottom-nav-item value="group" title="热议" icon="insert_comment"/>
            <mu-bottom-nav-item value="qa" title="问答" icon="question_answer"/>
        </mu-bottom-nav>
    </mu-paper>
    <mu-list>
        <mu-list-item v-for="index in 10" :key="index">
            <div  @click.stop="authorInfo" class="item-header">
                <div class="item-avatar">
                    <img src="/static/images/morning.jpg"/>
                </div>
                <div class="item-header-info">
                    寒云
                </div>
            </div>
            <div class="item-body">
                <div class="item-title">
                    欢迎大家加入我们的团队
                </div>
                <div class="item-content">
                    扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了扩军了
                </div>
            </div>
            <div class="item-footer">
                <span><i class="material-icons">comment</i>12</span>
                <span><i class="material-icons">favorite</i>12</span>
            </div>
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
      } else if (val === 'club') {
        this.$router.push('/club/index')
      }
    },
    authorInfo () {
    }
  }
}
</script>

<style scoped lang="less">
    .item-header {
        width: 100%;
        display: block;
        height: 30px;
        .item-avatar {
            float: left;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item-header-info{
            float:left;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-left: 10px;
        }
    }
    .item-body{
        clear: both;
        display: block;
        text-align: left;
        margin-top: 8px;
        .item-title{
            font-weight: bold;
        }
        .item-content{
            font-size: 90%;
            margin-top: 8px;
        }
    }
    .item-footer{
        span{
            float: left;
            margin-right: 6px;
            padding: 6px;
            i{
                font-size:16px;
            }
        }
    }
</style>
