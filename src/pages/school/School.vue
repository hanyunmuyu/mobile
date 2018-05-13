<template>
    <div>
        <mu-appbar title="高校">
            <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
            <mu-icon value="search" @click="search" slot="right"/>
        </mu-appbar>
        <div style="display: block;width: 100%">
            <mu-flat-button style="float: left" label="高校推荐" labelPosition="before" icon="refresh"/>
            <ul style="display: block;clear: both;width: 100%">
                <li v-for="a in 6" style="width: 33%;height: 50px;line-height:50px;display: block;float: left" :key="a">河南工业大学{{a}}</li>
            </ul>
        </div>
        <div style="display: flex;margin: 8px auto;text-align: center;clear: both">
            <div style="flex: 1;border-bottom: #7e57c2 2px solid">头条</div>
            <div style="flex: 1">最新</div>
            <div style="flex: 1">精华</div>
        </div>
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
  name: 'School',
  data () {
    return {
      cities: [
        {
          name: '郑州',
          id: 1
        },
        {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }, {
          name: '郑州',
          id: 1
        }
      ],
      activeCity: 0
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    tab (val) {
      this.activeCity = val
    },
    search () {
      this.$router.push('/school/search')
    }
  },
  computed: {
    navWidth: {
      set (val) {
      },
      get () {
        return this.cities.length * 55
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
