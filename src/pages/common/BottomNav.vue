<template>
    <div class="footer">
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
            <mu-bottom-nav-item value="home" title="关注" icon="home"/>
            <mu-bottom-nav-item value="explore" title="发现" icon="explore"/>
            <mu-bottom-nav-item value="add_alert" title="消息" icon="add_alert"/>
            <mu-bottom-nav-item value="account_circle" title="我的" icon="account_circle"/>
        </mu-bottom-nav>
    </mu-paper>

    </div>

</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'explore',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style lang="less">
.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>
