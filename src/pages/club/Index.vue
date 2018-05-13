<template>
    <div>
        <mu-appbar title="社团">
            <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
        </mu-appbar>
        <mu-text-field style="text-align: left;width: 100%" icon="search" hintText="同学/社团/高校"/>
        <div class="content">
            <ul :style="{width:navWidth+'px'}">
                <li :class="{'active':activeCity===index}" v-for="(city,index) in cities" :key="index" @click="tab(index)">
                    {{city.name}}
                    <span :class="{'active':activeCity===index}"></span>
                </li>
            </ul>
        </div>
        <mu-grid-list>
            <mu-grid-tile v-for="(tile, index) in list" :key="index">
                <img :src="tile.image"/>
            </mu-grid-tile>
        </mu-grid-list>

    </div>
</template>

<script>
export default {
  name: 'clubIndex',
  data () {
    return {
      list: [
        {
          image: '/static/images/breakfast.jpg',
          title: 'Breakfast',
          author: 'Myron'
        }, {
          image: '/static/images/burger.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '/static/images/camera.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: '/static/images/hats.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '/static/images/honey.jpg',
          title: 'Honey',
          author: 'yuyang'
        }, {
          image: '/static/images/morning.jpg',
          title: 'Morning',
          author: 'mokayi'
        }, {
          image: '/static/images/vegetables.jpg',
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }
      ],
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
  methods: {
    goBack () {
      this.$router.back()
    },
    tab (val) {
      this.activeCity = val
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
    .content {
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
