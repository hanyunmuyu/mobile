<template>
    <div>
        <mu-back-top :bottom="60" :duration="1500" icon="arrow_upward"/>

        <div class="footer">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
                    <mu-bottom-nav-item value="home" title="关注" to="/" icon="home"/>
                    <mu-bottom-nav-item value="explore" title="发现" to="/explore" icon="explore"/>
                    <mu-bottom-nav-item value="group" title="校园" to="/school" icon="school"/>
                    <mu-bottom-nav-item value="alert" title="消息" to="/message" icon="add_alert"/>
                    <mu-bottom-nav-item value="account_circle" title="我的" to="/account" icon="account_circle"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      bottomNav: 'explore',
      bottomNavColor: 'explore'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    },
    backTopCallBack () {
      window.alert('I back top!')
    }
  }
}
</script>
<style>
    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
