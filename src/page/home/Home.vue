<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab to="/home" value="school" title="校园"/>
            <mu-tab to="/home" value="shetuan" title="社团"/>
            <mu-tab to="/home" value="student" title="同学"/>
            <mu-tab to="/home" value="class" title="班级"/>
        </mu-tabs>
        <div>
            <div v-if="activeTab === 'school'">
                <mu-list>
                    <mu-list-item v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
                        <mu-avatar src="/static/images/honey.jpg" slot="left"/>
                        <span slot="describe">
                            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </span>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'shetuan'">
                <mu-list>
                    <mu-list-item v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
                        <mu-avatar src="/static/images/honey.jpg" slot="left"/>
                        <span slot="describe">
                            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </span>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'student'">
                <mu-list>
                    <mu-list-item v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
                        <mu-avatar src="/static/images/honey.jpg" slot="left"/>
                        <span slot="describe">
                            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </span>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'class'">
                <mu-list>
                    <mu-list-item v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
                        <mu-avatar src="/static/images/honey.jpg" slot="left"/>
                        <span slot="describe">
                            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </span>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      activeTab: 'shetuan'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    syncData () {
      let url = 'http://192.168.1.131:8080/api/v1/order/detail?orderSn=2018020154485350'
      axios.get(url).then(res => {
        this.$store.state.loading = true
        let data = res.data.data
        let status = res.data.status
        if (status === 200) {
          // this.$router.push('/search')
        }
        return data
      }).then(res => {
        this.$store.commit('add')
        setTimeout(() => {
          this.$store.state.loading = false
        }, 3000)
        console.log(this.$store.state.count)
      })
    }
  },
  beforeMount: function () {
    // 可以用tab来确定分享后显示的tab页面
    this.activeTab = this.$route.query.tab === undefined ? this.activeTab : this.$route.query.tab
  }
}
</script>
<style>
    .header {
        /*position: fixed;*/
        top: 0;
        width: 100%;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
