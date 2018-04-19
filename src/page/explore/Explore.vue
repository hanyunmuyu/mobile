<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="search" slot="right" @click="search"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item @click="go()" v-for="(item,index) in list" :key="index">
                <div class="list-header">
                    <div class="user-avatar">
                        <img :src="item.avatar">
                    </div>
                    <span>寒云</span>
                </div>
                <div class="list-title">
                    我得意的笑
                </div>
                <div v-if="item.imgList.length<=1" class="list-content">
                    <div class="list-content-text">
                        {{item.description}}
                    </div>
                    <div v-if="true" class="list-content-img">
                        <img class="img-1" v-for="(img,k) in item.imgList" :src="img" :key="k">
                    </div>
                </div>
                <div v-else class="list-content-hasImages">
                    <div class="list-content-text">
                        {{item.description}}
                    </div>
                    <div v-if="item.imgList.length===2" class="list-content-img">
                        <img class="img-2" v-for="(img,k) in item.imgList" :src="img" :key="k">
                    </div>
                    <div v-else-if="item.imgList.length===3" class="list-content-img">
                        <img class="img-3" v-for="(img,k) in item.imgList" :src="img" :key="k">
                    </div>
                </div>
                <div class="list-footer">
                    <span>
                        <mu-icon size="15" value="favorite_border"/>{{index*10}}
                        <mu-icon size="15" value="star_border"/>{{index*5}}
                    </span>
                </div>
            </mu-list-item>
            <mu-divider inset/>
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

    .list-header {
        display: block;
        width: 100%;
        height: 25px;
    }
    .list-header span{
        display: block;
        line-height: 25px;
        text-align: center;
        vertical-align: center;
    }
    .user-avatar {
        border-radius: 50%;
        overflow: hidden;
        width: 25px;
        height: 25px;
        display: inline-block;
        position: relative;
        float: left;
    }

    .list-header span {
        float: left;
        margin-left: 20px;
    }

    .user-avatar img {
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    .list-title {
        text-align: left;
        font-size: 110%;
        margin: 6px;
    }
    .list-content {
        width: 100%;
        display: flex;
    }

    .list-content-text {
        flex: 10;
        text-align: left;
        float: left;
        font-size: 96%;
        margin-bottom: 2px;
    }

    .list-content-img {
        flex: 3;
    }
    .img-1{
        width: 100%;
    }
    .img-2{
        width: 50%;
    }
    .img-3{
        width: 33%;
    }

    .list-footer span {
        float: left;
        margin-right: 10px;
    }
</style>
