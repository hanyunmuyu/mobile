<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item @click="go" v-for="(item,index) in dataList" :key="index">
                <div style="width: 100%;overflow: hidden;display: flex">
                    <div style="flex: 3">
                        <div class="header-left"  @click.stop="userInfo(item.userId)">
                            <mu-avatar :size=20 :src="item.avatar" slot="avatar"/>
                            <span>{{item.username}}</span>
                        </div>
                        <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                            <h1 style="font-size: 110%">{{item.title}}</h1>
                            <div style="margin-top: 10px;">{{item.description}}</div>
                            <div style="margin-top: 10px;font-size: 80%">点击：{{item.clickNum}}   收藏：{{item.favoriteNum}}</div>
                        </div>
                    </div>
                    <div style="flex: 1;">
                        <img style="width: 100%;" v-lazy="item.img"/>
                    </div>
                </div>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    go () {
      this.$router.push('/detail')
      this.$store.state.footerActive = 'home'
    },
    userInfo (id) {
      this.$router.push('/user/info/' + id)
    },
    getData () {
      this.$service.getExploreList(this.$api.explore, {page: 1}).then((r) => {
        this.dataList = r.data
      })
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>
<style lang="less">
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

    .popup-bottom {
        width: 100%;
        max-width: 375px;
    }
    .header-left {
        text-align: left;
    }
</style>
