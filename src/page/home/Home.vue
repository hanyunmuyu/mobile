<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab to="/home/school" value="school" title="校园"/>
            <mu-tab to="/home/shetuan" value="shetuan" title="社团"/>
            <mu-tab to="/home/class" value="class" title="班级"/>
        </mu-tabs>
        <div>
            <div v-if="activeTab === 'school'">
                <h2 @click="syncData">校园</h2>
                <p>
                    这是第二个 tab
                </p>
            </div>
            <div v-if="activeTab === 'shetuan'">
                <h2>社团</h2>
                <p>
                    这是第二个 tab
                </p>
            </div>
            <div v-if="activeTab === 'class'">
                <h2>班级</h2>
                <p>
                    这是第三个 tab
                </p>
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
  computed: {
    activeTab: {
      get () {
        return this.$route.params.tab
      },
      set (tabActive) {}
    }
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
