<template>
<div>
    <mu-appbar :title="title">
        <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
    </mu-appbar>
</div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      title: '欢迎大家加入我们的团队'
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
    .item-header {
        width: 100%;
        display: block;
        height: 30px;
        .item-avatar {
            float: left;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item-header-info{
            float:left;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-left: 10px;
        }
    }
    .item-body{
        clear: both;
        display: block;
        text-align: left;
        margin: 8px 0;
        .item-title{
            font-weight: bold;
        }
        .item-content{
            margin-top: 8px;
        }
    }
    .item-footer{
        span{
            float: left;
            margin-right: 6px;
            padding: 6px;
            i{
                font-size:16px;
            }
        }
    }
</style>
