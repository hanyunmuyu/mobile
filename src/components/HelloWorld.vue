<template>
    <div>
        <div class="header">
            <!--<mu-appbar title="">-->
            <!--<mu-icon-button icon="search" slot="right"/>-->
            <!--</mu-appbar>-->

            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="school" title="校园"/>
                <mu-tab value="shetuan" title="社团"/>
                <mu-tab value="class" @active="handleActive" title="班级"/>
            </mu-tabs>

        </div>
        <div>
            <div v-if="activeTab === 'school'">
                <h2>校园</h2>
                <p>
                    这是第一个 tab
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
        <div class="footer">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
                    <mu-bottom-nav-item value="home" title="关注" icon="home"/>
                    <mu-bottom-nav-item value="explore" title="发现" icon="explore"/>
                    <mu-bottom-nav-item value="group" title="校园" icon="school"/>
                    <mu-bottom-nav-item value="alert" title="消息" icon="add_alert"/>
                    <mu-bottom-nav-item value="account_circle" title="我的" icon="account_circle"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>

<script>
export default {
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
