<template>
    <div>
        <div class="header">
            <mu-appbar title="我的收藏">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <mu-list-item v-for="(item,index) in dataList" @click="detail(item)" :key="index">
                <div class="list-item-container" v-if="item.imgList.length===0">
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
                        <mu-icon :size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon :size=13 color="#7e57c2" value="favorite"/>
                        {{item.favorite_num}}
                    </div>
                </div>
                <div class="list-item-container" v-if="item.imgList.length===1">
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
                                 v-lazy="img" :key="i"/>
                        </div>
                    </div>
                    <div class="item-footer">
                        <mu-icon :size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon :size=13 color="#7e57c2" value="favorite"/>
                        {{item.favorite_num}}
                    </div>
                </div>
                <div class="list-item-container" v-else-if="item.imgList.length>1">
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
                        <div class="img-box"  v-for="(img,i) in item.imgList" :key="i">
                            <img v-lazy="img"/>
                        </div>
                    </div>
                    <div class="item-footer">
                        <mu-icon :size=13 color="#7e57c2" value="remove_red_eye"/>
                        {{item.click_num}}
                        <mu-icon :size=13 color="#7e57c2" value="favorite"/>
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
  name: 'collection',
  data () {
    return {
      dataList: [],
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      collectionCurrentPage: 1,
      lastPage: 1,
      timer: null
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    search () {
      this.$router.push('/search')
    },
    detail (item) {
      this.$service.clickNumberAdd(this.$api.clickNumberAddUlr, {sourceId: item.source_id, tag: item.tag})
      if (item.tag === 'club') {
        this.$router.push('/club/activity/detail/' + item.source_id)
      } else if (item.tag === 'school') {
        this.$router.push('/school/activity/detail/' + item.source_id)
      } else if (item.tag === 'user_post') {
        this.$router.push('/user/activity/detail/' + item.source_id)
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
        this.loading = false
      }, 10000)
      if (this.lastPage > this.collectionCurrentPage) {
        if (!this.loading) {
          this.loading = true
          this.syncDataList()
        }
      }
    },
    getData () {
      this.collectionCurrentPage = 1
      this.$service.getUserCollection(this.$api.userCollectionUrl, {page: this.collectionCurrentPage}).then((r) => {
        if (r.code === 2000) {
          this.dataList = r.data.data
          this.collectionCurrentPage += 1
          this.lastPage = r.data.last_page
        }
      })
    },
    syncDataList () {
      this.$service.syncUserCollection(this.$api.userCollectionUrl, {page: this.collectionCurrentPage}).then((r) => {
        if (r.code === 2000) {
          let data = r.data.data
          let tmp = []
          tmp = this.dataList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.dataList = tmp
          this.collectionCurrentPage += 1
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
    .list-item-container {
        width: 100%;
        overflow: hidden;
        display: block;
        min-height: 100px;
        text-align: left;
        .header-left {
            width: 100%;
            display: block;
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
            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
            -webkit-line-clamp: 3; /** 显示的行数 **/
            overflow: hidden;
            text-overflow:ellipsis;
        }
        .description-flex{
            display: flex;
            .description-text{
                flex: 3;
            }
            .description-img{
                border-radius: 4%;
                overflow: hidden;
                flex: 1;
                img{
                    width: 100%;
                }
            }
        }
        .img-list {
            display: flex;
            max-height: 128px;
            min-height: 86px;
            overflow: hidden;
            .img-box{
                margin: 2px;
                flex: 1;
                border-radius: 4%;
                overflow: hidden;
                img{
                    width: 100%;
                }
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
