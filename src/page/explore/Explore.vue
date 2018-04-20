<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="search" slot="right" @click="search"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item @click="go" v-for="index in 10" :key="index">
                <div style="width: 100%;overflow: hidden;display: flex">
                    <div style="flex: 3">
                        <div class="header-left">
                            <mu-avatar :size=20 src="/static/images/water-plant.jpg" slot="avatar"/>
                            <span>hanyun</span>
                        </div>
                        <div style="margin-top:10px;display: block;clear:both;width: 100%;text-align: left">
                            <h1 style="font-size: 110%">钟楼广场进行轮滑报验开始了</h1>
                            <div style="margin-top: 10px;font-size: 90%">预计下午进行轮滑表演，欢迎大家一起来观赏</div>
                            <div style="margin-top: 10px;font-size: 80%">点击：100 收藏：10</div>
                        </div>
                    </div>
                    <div style="flex: 1;">
                        <img style="width: 100%" src="/static/hats.jpg"/>
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
      list: [
        {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/camera.jpg',
            '/static/images/camera.jpg',
            '/static/images/breakfast.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }, {
          avatar: '/static/hats.jpg',
          title: '河南工业大学',
          description: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介',
          imgList: [
            '/static/images/hats.jpg',
            '/static/images/breakfast.jpg',
            '/static/images/camera.jpg'
          ]
        }
      ]
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    go () {
      this.$router.push('/detail')
      this.$store.state.footerActive = 'home'
    }
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
