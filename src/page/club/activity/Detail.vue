<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-sub-header>
                <div style="display: block;width: 100%;margin-top: 16px">
                    <div style="display: flex;width: 100%">
                            <mu-chip>
                                <mu-avatar :size="32"
                                           src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                楼主
                            </mu-chip>
                    </div>
                    <div style="width: 100%;text-align: left">
                        <div>三月桃花红胜火三月桃花红胜火三月桃花红胜火</div>
                    </div>
                    <div style="display: flex">
                        <div style="flex: 2">
                            <ul style="display: block;width: 100%">
                                <li v-for="i in 6" :key="i" style="display: block;width: 33%;float: left">
                                    <img style="width: 100%;padding: 1px 2px"
                                         src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </mu-sub-header>

            <mu-list-item v-for="(item,index) in dataList" :key="index">
                <div style="display: block;width: 100%;min-height: 200px">
                    <div style="display: flex;width: 100%">
                        <div style="flex: 1">
                            <div style="width: 100%;line-height: 40px">
                                <div style="display:block;float:left;width:40px;height: 40px;border-radius: 50%;overflow: hidden;">
                                    <mu-avatar :size="32"
                                               src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>                                </div>
                                <div style="display: block;float: left;line-height:inherit">
                                    <h1>寒云</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 100%;text-align: left">
                        <div style="padding: 16px">{{item.content}}</div>
                    </div>
                    <div style="display: flex">
                        <div style="flex: 2">
                            <ul style="display: block;width: 100%">
                                <li v-if="index%3===0" v-for="i in 6" :key="i"
                                    style="display: block;width: 33%;float: left">
                                    <img style="width: 100%;padding: 1px 2px"
                                         src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                </li>
                                <li v-if="index%3===1" v-for="i in 1" :key="i"
                                    style="display: block;width: 100%;float: left">
                                    <img style="width: 100%;padding: 1px 2px"
                                         src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524530156&di=16ad7e58d060f544f118921007c21868&src=http://www.cnr.cn/lvyou/list/20150402/W020150402384247571517.jpg"/>
                                </li>
                                <li v-if="index%3===2" v-for="i in 2" :key="i"
                                    style="display: block;width: 50%;float: left">
                                    <img style="width: 100%;padding: 1px 2px"
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
                    <mu-text-field hintText="写点评论" @input="contentVal" icon="mode_edit"/>
                    <mu-flat-button label="发表" @click="doPost" primary/>

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
        <mu-toast v-if="toast" :message="msg"/>
    </div>
</template>

<script>
export default {
  name: 'clubActivityDetail',
  data () {
    return {
      hasNewItem: true,
      comment: false,
      icon: 'favorite_border',
      index: 1,
      value: true,
      toast: false,
      msg: '',
      tag: 'club',
      content: '',
      dataList: [],
      canPost: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    showComment () {
      this.comment = !this.comment
    },
    contentVal (val) {
      this.content = val
    },
    doPost () {
      let content = this.content
      let id = this.$route.params.id
      this.showComment()

      if (this.canPost) {
        this.canPost = false
        this.$service.clubActivityDoPost(this.$api.clubActivityDoPost, {activityId: id, content: content}).then((r) => {
          if (r.code === 2000) {
            this.canPost = true
            this.toast = true
            this.msg = r.msg
          }
        })
      }
      setTimeout(() => {
        this.canPost = true
        this.toast = false
      }, 2000)
    },
    favorite () {
      this.toast = true
      setTimeout(() => {
        this.toast = false
      }, 2000)
      let id = this.$route.params.id
      this.$service.addFavorite(this.$api.addFavoriteUrl, {id: id, tag: this.tag}).then((r) => {
        if (r.code === 2000) {
          this.icon = this.icon === 'favorite_border' ? 'favorite' : 'favorite_border'
        }
        this.msg = r.msg
      })
    },
    init () {
      let id = this.$route.params.id
      this.$service.getClubActivityPostDetail(this.$api.clubActivityPostDetail, {id: id, tag: this.tag}).then((r) => {
        if (r.code === 2000) {
          this.dataList = r.data.data
          if (r.data.isFavorite === 1) {
            this.icon = 'favorite'
          }
        }
      })
    }
  },
  watch: {
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
