<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item v-for="index in 10" :key="index">
                <div style="display: block;width: 100%;min-height: 100px">
                    <div style="display: flex">
                        <div style="flex: 1">
                            <div style="width: 100%;">
                                <div style=";margin:18px auto;width:40px;height: 40px;text-align: center;border-radius: 50%;overflow: hidden;">
                                    <img style="height: 100%;"
                                         src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                </div>
                            </div>
                            <div style="width: 100%">
                                <div>
                                    寒云
                                </div>
                                <div>
                                    <h1>
                                        人至贱则无敌
                                    </h1>
                                </div>
                                <div>
                                    <h1>Ta的关注</h1>
                                    <ul style="display: block;width: 100%;text-align: center">
                                        <li style="display: block;float: left;width: 50%;text-align: left">111</li>
                                        <li style="display: block;float: left;width: 50%;text-align: left">111</li>
                                        <li style="display: block;float: left;width: 50%;text-align: left">111</li>
                                        <li style="display: block;float: left;width: 50%;text-align: left">111</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style="flex: 2">
                            <ul style="display: block;width: 100%">
                                <li v-for="index in 5" :key="index" style="display: block;width: 50%;float: left">
                                    <img style="width: 100%"
                                         src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </mu-list-item>
        </mu-list>
        <div style="display:block;width:100%;position: fixed;bottom: 0;background-color: #f5f5f5;text-align: center">
            <div v-if="comment" style="display: flex;width: 100%">
                <div style="width: 100%">
                    <mu-text-field hintText="写点评论" icon="mode_edit"/>
                    <mu-flat-button label="发表" primary/>

                </div>
            </div>
            <div style="display:flex;width: 100%;background-color: #f5f5f5;text-align: center">
                <div style="flex: 1;color: #7e57c2" @click="showComment">
                    <mu-icon-button icon="insert_comment" primary slot="right"/>
                </div>
                <div style="flex: 1;color: #7e57c2">
                    <mu-icon-button :icon="icon" @click="favorite" primary slot="right"/>
                </div>
                <div style="flex: 1;color: #7e57c2">
                    <mu-icon-button icon="share" primary slot="right"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      hasNewItem: true,
      comment: false,
      icon: 'favorite_border'
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    showComment () {
      this.comment = !this.comment
    },
    favorite () {
      this.icon = this.icon === 'favorite_border' ? 'favorite' : 'favorite_border'
    }
  }
}
</script>
<style lang="less">
    .file-button {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
    }

    .demo-flat-button-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .demo-flat-button {
        margin: 12px;
    }
</style>
