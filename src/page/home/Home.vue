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
                    <mu-list-item v-for="index in 10" :key="index">
                        <div style="display: flex">
                            <div style="flex: 2;">
                                <img style="width: 100%;border-radius: 6px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524453075183&di=3708c2cb0f550b515119f50071199637&imgtype=0&src=http%3A%2F%2Fwww.dxsbb.com%2FupFiles%2FinfoImg%2F2015120537135861.jpg"/>
                            </div>
                            <div style="flex: 8;text-align: left;margin-left: 10px">
                                <div>
                                    <h1 style="font-size: 100%;position: relative">轮滑社团
                                        <span v-if="hasNewItem"
                                              style="width: 10px;height: 10px;background: #7e57c2;position:absolute;border-radius: 50%;line-height: 10px"></span>
                                        <span style="display: inline;margin-left: 20px;font-size: 66%">2个更新</span>
                                    </h1>
                                    <p style="text-overflow:ellipsis;overflow:hidden;font-size: 86%;margin-top: 6px">今天在钟楼广场举行轮滑表演欢迎大家前去观看</p>
                                </div>
                            </div>
                        </div>
                        <mu-icon value="keyboard_arrow_right" slot="right"/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'shetuan'">
                <mu-list>
                    <mu-list-item v-for="index in 10" :key="index">
                        <div style="display: flex">
                            <div style="flex: 2;">
                                <img style="width: 100%;border-radius: 6px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524453075183&di=3708c2cb0f550b515119f50071199637&imgtype=0&src=http%3A%2F%2Fwww.dxsbb.com%2FupFiles%2FinfoImg%2F2015120537135861.jpg"/>
                            </div>
                            <div style="flex: 8;text-align: left;margin-left: 10px">
                                <div>
                                    <h1 style="font-size: 120%;position: relative">寒云
                                        <span v-if="hasNewItem"
                                              style="width: 10px;height: 10px;background: #7e57c2;position:absolute;border-radius: 50%;line-height: 10px"></span>
                                        <span style="display: inline;margin-left: 20px;font-size: 80%">2个更新</span>
                                    </h1>
                                    <p style="font-size: 86%;margin-top: 6px">鸿茅药酒怎么了</p>
                                </div>
                            </div>
                        </div>
                        <mu-icon value="keyboard_arrow_right" slot="right"/>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'student'">
                <mu-list>
                    <mu-list-item v-for="index in 10" :key="index">
                        <div style="display: flex">
                            <div style="flex: 2;">
                                <img style="width: 100%;border-radius: 6px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524453075183&di=3708c2cb0f550b515119f50071199637&imgtype=0&src=http%3A%2F%2Fwww.dxsbb.com%2FupFiles%2FinfoImg%2F2015120537135861.jpg"/>
                            </div>
                            <div style="flex: 8;text-align: left;margin-left: 10px">
                                <div>
                                    <h1 style="font-size: 120%;position: relative">寒云
                                        <span v-if="hasNewItem"
                                              style="width: 10px;height: 10px;background: #7e57c2;position:absolute;border-radius: 50%;line-height: 10px"></span>
                                        <span style="display: inline;margin-left: 20px;font-size: 80%">2个更新</span>
                                    </h1>
                                    <p style="font-size: 86%;margin-top: 6px">鸿茅药酒怎么了</p>
                                </div>
                            </div>
                        </div>
                        <mu-icon value="keyboard_arrow_right" slot="right"/>
                        <mu-divider inset/>
                    </mu-list-item>
                </mu-list>
            </div>
            <div v-else-if="activeTab === 'class'">
                <mu-list>
                    <mu-list-item v-for="index in 10" :key="index">
                        <div style="display: flex">
                            <div style="flex: 2;">
                                <img style="width: 100%;border-radius: 6px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524453075183&di=3708c2cb0f550b515119f50071199637&imgtype=0&src=http%3A%2F%2Fwww.dxsbb.com%2FupFiles%2FinfoImg%2F2015120537135861.jpg"/>
                            </div>
                            <div style="flex: 8;text-align: left;margin-left: 10px">
                                <div>
                                    <h1 style="font-size: 120%;position: relative">寒云
                                        <span v-if="hasNewItem"
                                              style="width: 10px;height: 10px;background: #7e57c2;position:absolute;border-radius: 50%;line-height: 10px"></span>
                                        <span style="display: inline;margin-left: 20px;font-size: 80%">2个更新</span>
                                    </h1>
                                    <p style="font-size: 86%;margin-top: 6px">鸿茅药酒怎么了</p>
                                </div>
                            </div>
                        </div>
                        <mu-icon value="keyboard_arrow_right" slot="right"/>
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
      activeTab: 'school',
      hasNewItem: true
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
