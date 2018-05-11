<template>
    <div>
        <mu-appbar title="问答">
            <mu-icon-button  @click="goBack" icon="arrow_back" slot="left"/>
            <mu-flat-button label="提问" icon="edit" @click="QAAdd" slot="right" primary/>
        </mu-appbar>
        <!--<mu-divider/>-->
        <!--<mu-text-field style="text-align: left;width: 100%" icon="search" hintText="搜索问题"/>-->
        <mu-paper>
            <mu-bottom-nav>
                <mu-bottom-nav-item value="recents" title="最新" icon="restore"/>
                <mu-bottom-nav-item value="favorites" title="热议" icon="chat"/>
                <mu-bottom-nav-item value="nearby" title="经典" icon="loyalty"/>
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
  name: 'Index',
  data () {
    return {
      value: '',
      activeStep: 0
    }
  },
  methods: {
    QAAdd () {
      this.$router.push('/qa/add')
    },
    goBack () {
      this.$router.back()
    },
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<style scoped>

</style>
