<template>
    <div>
        <mu-appbar title="社团">
            <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
            <mu-icon-button @click="createClub" icon="add" slot="right"/>
        </mu-appbar>
        <mu-text-field style="text-align: left;width: 100%" icon="search" hintText="社团"/>
        <div class="tab-content">
            <ul :style="{width:navWidth+'px'}">
                <li :class="{'active':activeCity===index}" v-for="(city,index) in cities" :key="index" @click="tab(index)">
                    {{city.name}}
                    <span :class="{'active':activeCity===index}"></span>
                </li>
            </ul>
        </div>
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
  name: 'clubIndex',
  data () {
    return {
      schools: [],
      cities: [
        {
          name: '全部',
          id: 1
        },
        {
          name: '绘画',
          id: 1
        },
        {
          name: '绘画',
          id: 1
        },
        {
          name: '舞蹈',
          id: 1
        }, {
          name: '跆拳道',
          id: 1
        },
        {
          name: 'PS',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        },
        {
          name: '摄影',
          id: 1
        }
      ],
      activeCity: 0
    }
  },
  mounted () {
    for (let i = 0; i < 15; i++) {
      if (i % 3 === 0) {
        this.schools.push(
          {
            id: i,
            name: '旅游团' + i,
            noticeNmu: 100,
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526283438972&di=6c352458995eb2b62dca0fa5fe375892&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3256669430%2C1985233133%26fm%3D214%26gp%3D0.jpg'
          })
      } else {
        this.schools.push(
          {
            id: i,
            name: '旅游团' + i,
            noticeNmu: 100,
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526283530706&di=3fe0b2613a44810f8f1c4aee43b12ce8&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2395807436%2C3339272206%26fm%3D214%26gp%3D0.jpg'
          })
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    tab (val) {
      this.activeCity = val
    },
    createClub () {
      this.$router.push('/club/create')
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
                border-radius: 3px;
                height: 150px;
                overflow: hidden;
            }
            .notice {
                width: 100%;
                font-size: 14px;
                position: absolute;
                bottom: 4px;
                background: rgba(0, 0, 0, .1);
                color: white;
            }
        }
        .title {
            width: 100%;
            font-size: 12px;
            text-align: center
        }
    }

    .tab-content {
        width: 100%;
        display: block;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 35px;
        line-height: 30px;
        white-space: nowrap;
        word-break: keep-all; /* 不换行 */
        ul {
            display: block;
            line-height: 30px;
            li {
                display: block;
                text-align: center;
                float: left;
                height: 30px;
                line-height: 30px;
                margin-right: 5px;
                min-width: 50px;
                position: relative;
                span{
                    display: none;
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background: #7e57c2;
                }
            }
        }
        .active{
            display: block;
            color: #7e57c2;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

</style>
