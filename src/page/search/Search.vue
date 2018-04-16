<template>
    <div>
        <div class="header">
            <mu-flat-button icon="search" primary  @click="search"/>
            <mu-auto-complete slot="left" hintText="搜索高校/社团/好友" @input="handleInput" @keyup.13="goBack" :dataSource="dataSource" @change="handlechange" />
            <mu-flat-button primary label="取消" @click="goBack"/>
        </div>
        <mu-list>
            <mu-list-item v-for="index in 50" title="这个周末一起吃饭么?" :key="index">
                <mu-avatar src="/static/images/honey.jpg" slot="leftAvatar"/>
                <span slot="describe">
                            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                 </span>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      bottomNav: 'explore',
      bottomNavColor: 'explore',
      activeTab: 'school',
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      dataSource: []
    }
  },
  methods: {
    handlechange (val) {
      console.log(`you choose ${val}`)
    },

    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val,
        val + val,
        val + val,
        val + val,
        val + val + val
      ]
    },
    goBack () {
      this.$router.back()
    },
    search () {
      var d = window.document.getElementsByClassName('mu-text-field-input')
      alert(d[0].value)
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>
<style lang="less">
    .header{
        display: flex;
        width: 100%;
        /*color: #FFF;*/
        /*background-color: #9575cd;*/
    }
    .mu-text-field-hint{
        text-align: left
    }
</style>
