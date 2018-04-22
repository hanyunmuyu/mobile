<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab to="/school" value="school" title="校园"/>
            <mu-tab to="/school" value="shetuan" title="社团"/>
            <mu-tab to="/school" value="class" title="班级"/>
        </mu-tabs>
        <div v-if="activeTab === 'school'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <ul class="ul-list">
                <li v-for="(item,index) in schoolList" class="list-item" :key="index"  @click="goToShetuan(item.id)">
                    <div class="list-item-img">
                        <img v-lazy="item.logo"/>
                    </div>
                    <p class="ul-list-footer">
                        {{index*10000}}人关注
                    </p>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.name}}
                    </h2>
                </li>
            </ul>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>
        <div v-if="activeTab === 'shetuan'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh(activeTab)"/>
            <ul class="ul-list">
                <li v-for="(item,index) in shetuanList" class="list-item" :key="index" @click.stop="goToShetuan(index)">
                    <div class="list-item-img">
                        <img :src="item.image"/>
                    </div>
                    <p class="ul-list-footer">
                        {{index*10000}}人关注
                    </p>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.title}}
                    </h2>
                </li>
            </ul>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>
        <div v-if="activeTab === 'class'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <ul class="ul-list">
                <li v-for="(item,index) in classList" class="list-item" :key="index"  @click="goToShetuan(index)">
                    <div class="list-item-img">
                        <img :src="item.image"/>
                    </div>
                    <p class="ul-list-footer">
                        {{index*10000}}人关注
                    </p>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.title}}
                    </h2>
                </li>
            </ul>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>
        <mu-popup position="bottom" popupClass="popup-bottom" :open="bottomPopup" @close="close('bottom')">
            <mu-appbar title="简介">
                <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
            </mu-appbar>
            <mu-content-block>
                <p>{{detail}}</p>
            </mu-content-block>
        </mu-popup>
    </div>
</template>

<script>
export default {
  name: 'school',
  data () {
    return {
      activeTab: 'school',
      bottomPopup: false,
      detail: '',
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      num: 10,
      shetuanList: [
        {
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524133125781&di=c7963eadce9cc50b0fb01b032d1a7c47&imgtype=0&src=http%3A%2F%2Fpic25.photophoto.cn%2F20121030%2F0008020353982724_b.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }
      ],
      schoolTotalPage: 1,
      schoolCurrentPage: 1,
      schoolList: [],
      classList: [
        {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }
      ]
    }
  },
  mounted () {
    this.trigger = this.$el
    this.scroller = this.$el
    this.getSchoolList(true)
  },
  methods: {
    goToShetuan (id) {
      this.$router.push('/shetuan/' + id)
    },
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    open (position, detail) {
      this[position + 'Popup'] = true
      this.detail = detail
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    refresh () {
      let tag = this.activeTab
      if (!this.loading) {
        if (tag === 'school') {
          this.getSchoolList(false)
        }
      }
    },
    loadMore () {
      let tag = this.activeTab
      if (!this.loading) {
        if (tag === 'school') {
          this.getSchoolList(true)
        }
      }
    },
    getSchoolList (isLoading) {
      if (!this.loading) {
        this.loading = true
        if (!isLoading) {
          this.schoolCurrentPage = 1
        }
        this.$axios({
          method: 'get',
          url: this.$api.schoolList + '?page=' + this.schoolCurrentPage
        }).then((res) => {
          return res.data
        }).then((res) => {
          if (res.code === 2000) {
            let data = res.data.data
            if (isLoading) {
              for (let index in data) {
                this.schoolList.push(data[index])
              }
            } else {
              this.schoolList = data
            }
            this.schoolCurrentPage += 1
          }
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
      }
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  },
  beforeMount: function () {
    // 可以用tab来确定分享后显示的tab页面
    this.activeTab = this.$route.query.tab === undefined ? this.activeTab : this.$route.query.tab
  }
}
</script>
<style>
    .ul-list{
        margin: 0 auto;
        width: 100%;
    }
    .list-item{
        position: relative;
        height: 170px;
        overflow: hidden;
    }
    .list-item h2{
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
    }
    .ul-list .list-item:nth-child(odd){
        margin-left: 8px;
        width: 47%;
        float: left;
    }
    .ul-list .list-item:nth-child(even ){
        width: 47%;
        float: right;
        margin-right: 8px;
    }
    .list-item-img{
        width: 100%;
        height: 130px;
    }
    .ul-list .list-item h2{
        margin-top: 12px;
    }
    .ul-list-footer{
        width: 100%;
        position: absolute;
        top: 110px;
        height: 25px;
        line-height: 25px;
        color: #ffffff;
        background-color: #424242;
        opacity: 0.8;
    }

    .popup-bottom {
        width: 100%;
    }
</style>
