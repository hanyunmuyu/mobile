<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
            </mu-appbar>
        </div>
        <mu-list>
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <mu-list-item v-for="(item,index) in dataList" @click="detail(item)" :key="index">
                <div class="list-item" v-if="item.imgList.length===0">
                    <div class="header-left" @click.stop="itemSource(item)">
                        <mu-avatar :size=24 :src="item.avatar" slot="avatar"/>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="title">
                        <h1 class="title-text">{{item.title}}</h1>
                    </div>
                    <div class="description">
                        {{item.description}}
                    </div>
                    <div class="item-footer">
                        <mu-icon size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon size=13 color="#7e57c2" value="favorite"/>
                        {{item.favorite_num}}
                    </div>
                </div>
                <div class="list-item" v-if="item.imgList.length===1">
                    <div class="header-left" @click.stop="itemSource(item)">
                        <mu-avatar :size=24 :src="item.avatar" slot="avatar"/>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="description description-flex">
                        <div class="description-text">
                            {{item.description}}
                        </div>
                        <div class="description-img">
                            <img v-for="(img,i) in item.imgList" :style="{width: 100/(item.imgList.length)+'%'}"
                                 v-lazy="img"/>
                        </div>
                    </div>
                    <div class="item-footer">
                        <mu-icon size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon size=13 color="#7e57c2" value="favorite"/>
                        {{item.favorite_num}}
                    </div>
                </div>
                <div class="list-item" v-else-if="item.imgList.length>1">
                    <div class="header-left" @click.stop="itemSource(item)">
                        <mu-avatar :size=24 :src="item.avatar" slot="avatar"/>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="description">
                        {{item.description}}
                    </div>
                    <div class="img-list">
                        <img v-for="(img,i) in item.imgList" :style="{width: 100/(item.imgList.length)+'%'}"
                             v-lazy="img" :key="i"/>
                    </div>
                    <div class="item-footer">
                        <mu-icon size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon size=13 color="#7e57c2" value="favorite"/>
                        {{item.favorite_num}}
                    </div>
                </div>
            </mu-list-item>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      dataList: [],
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      exploreCurrentPage: 1,
      timer: null
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    detail (item) {
      this.$service.clickNumberAdd(this.$api.clickNumberAddUlr, {id: item.id})
      if (item.tag === 'club') {
        this.$router.push('/club/activity/detail/' + item.id)
      } else if (item.tag === 'school') {
        this.$router.push('/school/activity/detail/' + item.id)
      } else if (item.tag === 'user_post') {
        this.$router.push('/user/activity/detail/' + item.id)
      }
      // this.$store.state.footerActive = 'home'
    },
    itemSource (item) {
      if (item.tag === 'club') {
        this.$router.push('/club/' + item.id)
      } else if (item.tag === 'school') {
        this.$router.push('/school/' + item.id)
      } else if (item.tag === 'user_post') {
        this.$router.push('/user/info/' + item.id)
      }
    },
    refresh () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.refreshing) {
        this.refreshing = true
        this.getData()
      }
    },
    loadMore () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.loading) {
        this.loading = true
        this.syncDataList()
      }
    },
    getData () {
      this.exploreCurrentPage = 1
      this.$service.getExploreList(this.$api.explore, {page: this.exploreCurrentPage}).then((r) => {
        if (r.code === 2000) {
          this.dataList = r.data.data
          this.exploreCurrentPage += 1
        }
      })
    },
    syncDataList () {
      this.$service.sybcExploreList(this.$api.explore, {page: this.exploreCurrentPage}).then((r) => {
        if (r.code === 2000) {
          let data = r.data.data
          let tmp = []
          tmp = this.dataList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.dataList = tmp
          this.exploreCurrentPage += 1
        }
      })
    },
    clearTimer () {
      setTimeout(() => {
        this.loading = false
        this.refreshing = false
        clearTimeout(this.timer)
      }, 2000)
    }
  },
  mounted () {
    this.getData()
    this.trigger = this.$el
    this.scroller = this.$el
  },
  watch: {
    dataList (v1) {
      this.clearTimer()
    }
  }
}
</script>
<style lang="less">
    .list-item {
        width: 100%;
        overflow: hidden;
        display: block;
        min-height: 100px;
        text-align: left;
        .header-left {
            width: 100%;
            span{
                height: inherit;
            }
        }
        .title {
            width: 100%;
            margin: 6px auto;
            .title-text {
                font-size: 110%;
            }
        }
        .description {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            /*-webkit-line-clamp: 2;*/
        }
        .description-flex{
            display: flex;
            .description-text{
                flex: 3;
            }
            .description-img{
                flex: 1;
            }
        }
        .img-list {
            width: 100%;
            margin: 0 auto;
            display: block;
            text-align: center;
            img{
                padding: 1px;
                border-radius: 5%;
            }
            img:first-child(odd){
                float: left;
            }
            img:nth-child(2){
                margin: 0 auto;
            }
            img:last-child{
                float: right;
            }
        }
        .item-footer {
            display: block;
            width: 100%;
            margin-top: 10px;
            font-size: 80%;
            text-align: left
        }
    }
</style>
