<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="school" title="校园"/>
            <mu-tab value="shetuan" title="社团"/>
            <mu-tab value="class" @active="handleActive" title="班级"/>
        </mu-tabs>
        <div>
            <div v-if="activeTab === 'school'">

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
export default {
  name: 'home',
  data () {
    return {
      bottomNav: 'explore',
      bottomNavColor: 'explore',
      activeTab: 'school'
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
