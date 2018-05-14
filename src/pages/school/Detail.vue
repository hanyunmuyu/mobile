<template>
<div>
    <mu-appbar title="河南工业大学">
        <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
    </mu-appbar>
    <div class="page-header">
        <div class="logo">
            <img v-lazy="img"/>
        </div>
        <div class="page-title">
            <h1>河南工业大学</h1>
            <h2>12万人关注</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526226957771&di=42d8188be4508f1d1cfb0f363b79cbf3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D1b88f861a551f3ded7bfb127fc879a6a%2Fb58f8c5494eef01fbcb7286eeafe9925bd317dfd.jpg'
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
    .page-header{
        height: 60px;
        overflow: hidden;
        margin-top: 6px;
        .logo{
            float: left;
            height: 60px;
            width: 60px;
            img{
                height: 60px;
                width: 60px;
                border-radius: 2px;
            }
        }
        .page-title{
            text-align: left;
            float: left;
            padding-left: 10px;
            h1,h2{
                margin-top: 6px;
            }
        }
    }
    .motto{
        margin-top: 6px;
        text-align: left;
    }
</style>
