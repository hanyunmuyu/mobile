<template>
    <div>
        <mu-back-top :bottom="60" :duration="1500" icon="arrow_upward"/>
        <mu-linear-progress :size="10" v-if="$store.state.loading"  :strokeWidth="5" :value="0"/>
        <div class="footer">
            <mu-paper>
                <mu-bottom-nav :value="footerActive" shift @change="handleChange">
                    <mu-bottom-nav-item value="home" title="关注" to="/" icon="home"/>
                    <mu-bottom-nav-item value="explore" title="发现" to="/explore" icon="explore"/>
                    <mu-bottom-nav-item value="school" title="校园" to="/school" icon="school"/>
                    <mu-bottom-nav-item value="message" title="消息" to="/message" icon="add_alert"/>
                    <mu-bottom-nav-item value="account" title="我的" to="/account" icon="account_circle"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'foot',
  data () {
    return {}
  },
  methods: {
    handleChange (val) {
      this.$store.state.footerActive = val
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
  },
  computed: {
    ...mapGetters([
      'footerActive',
      'anotherGetter'
    ])
  },
  watch: {
    footerActive: (newVal, oldVal) => {
      console.log(newVal)
      console.log(oldVal)
    }
  },
  created: function () {
    // 可以在这里进行认证状态判断
    console.log(this.$store.state.token + 'created')
    let footerActive = this.$route.path.replace('/', '')
    if (footerActive !== '') {
      this.$store.state.footerActive = footerActive
    }
  },
  updated: function () {
    // 可以在这里进行认证状态判断
    console.log(this.$store.state.token + 'updated')
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
