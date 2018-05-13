<template>
    <div>
        <mu-appbar title="高校">
            <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
            <mu-icon value="search" @click="search" slot="right"/>
        </mu-appbar>
        <mu-list>
            <mu-list-item class="school-item" v-for="(school,index) in schools" :key="index">
                <div class="content">
                    <img v-lazy="school.img"/>
                    <p class="notice">{{school.noticeNmu}}万人关注</p>
                </div>
                <div class="title">
                    {{school.name}}
                </div>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      schools: []
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
  mounted () {
    for (let i = 0; i < 15; i++) {
      this.schools.push(
        {
          id: i,
          name: '河南工业大学' + i,
          noticeNmu: 100,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526226957771&di=42d8188be4508f1d1cfb0f363b79cbf3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D1b88f861a551f3ded7bfb127fc879a6a%2Fb58f8c5494eef01fbcb7286eeafe9925bd317dfd.jpg'
        })
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
    .school-item {
        width: 50%;
        float: left;
        .content {
            width: 100%;
            position: relative;
            display: block;
            img {
                width: 100%;
                border-radius: 3px
            }
            .notice {
                width: 100%;
                font-size: 14px;
                position: absolute;
                bottom: 4px;
                background: rgba(0, 0, 0, .1)
            }
        }
        .title {
            width: 100%;
            font-size: 12px;
            text-align: center
        }
    }
</style>
