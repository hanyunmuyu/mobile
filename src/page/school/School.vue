<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab to="/school" value="school" title="校园"/>
            <mu-tab to="/school" value="club" title="社团"/>
            <mu-tab to="/school" value="class" title="班级"/>
        </mu-tabs>
        <div v-if="activeTab === 'school'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <ul class="ul-list">
                <li v-for="(item,index) in schoolList" class="list-item" :key="index"  @click="goToSchool(item.id)">
                    <div class="list-item-img">
                        <img v-lazy="item.logo"/>
                        <p class="ul-list-footer">
                            {{index*10000}}人关注
                        </p>
                    </div>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.name}}
                    </h2>
                </li>
            </ul>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>
        <div v-if="activeTab === 'club'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh(activeTab)"/>
            <ul class="ul-list">
                <li v-for="(item,index) in clubList" class="list-item" :key="index" @click.stop="goToClub(item.id)">
                    <div class="list-item-img">
                        <img v-lazy="item.logo"/>
                        <p class="ul-list-footer">
                            {{index*10000}}人关注
                        </p>
                    </div>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.name}}
                    </h2>
                </li>
            </ul>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>
        <div v-if="activeTab === 'class'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <ul class="ul-list">
                <li v-for="(item,index) in classList" class="list-item" :key="index"  @click="goToClass(item.id)">
                    <div class="list-item-img">
                        <img v-lazy="item.logo"/>
                        <p class="ul-list-footer">
                            {{index*10000}}人关注
                        </p>
                    </div>
                    <h2  @click.stop="open('bottom',item)">
                        {{item.name}}
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
      schoolCurrentPage: 1,
      clubCurrentPage: 1,
      classCurrentPage: 1,
      schoolList: [],
      clubList: [],
      classList: [],
      timer: null
    }
  },
  mounted () {
    this.trigger = this.$el
    this.scroller = this.$el
    this.getSchoolList()
  },
  methods: {
    goToSchool (id) {
      this.$router.push('/school/' + id)
    },
    goToClub (id) {
      this.$router.push('/club/' + id)
    },
    goToClass (id) {
      this.$router.push('/class/' + id)
    },
    handleTabChange (val) {
      this.activeTab = val
      this.refreshing = false
      this.loading = false
      if (this.activeTab === 'school') {
        if (this.schoolList.length <= 0) {
          this.getSchoolList()
        }
      }
      if (this.activeTab === 'club') {
        if (this.clubList.length <= 0) {
          this.getClubList()
        }
      }
      if (this.activeTab === 'class') {
        if (this.classList.length <= 0) {
          this.getClassList()
        }
      }
    },
    open (position, detail) {
      this[position + 'Popup'] = true
      this.detail = detail
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    refresh () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.refreshing) {
        this.refreshing = true
        if (this.activeTab === 'school') {
          this.getSchoolList()
        }
        if (this.activeTab === 'club') {
          this.getClubList()
        }
        if (this.activeTab === 'class') {
          this.getClassList()
        }
      }
    },
    loadMore () {
      this.timer = setTimeout(() => {
        this.refreshing = false
      }, 10000)
      if (!this.loading) {
        this.loading = true
        if (this.activeTab === 'school') {
          this.syncSchoolList()
        }
        if (this.activeTab === 'club') {
          this.syncClubList()
        } if (this.activeTab === 'class') {
          this.syncClassList()
        }
      }
    },
    getSchoolList () {
      this.schoolList = []
      this.schoolCurrentPage = 1
      this.$service.getSchoolList(this.$api.schoolList, {page: this.schoolCurrentPage}).then((res) => {
        if (res.code === 2000) {
          this.schoolList = res.data.data
          this.schoolCurrentPage += 1
        }
      })
    },
    syncSchoolList () {
      this.$service.syncSchoolList(this.$api.schoolList, {page: this.schoolCurrentPage}).then((res) => {
        if (res.code === 2000) {
          let data = res.data.data
          let tmp = []
          tmp = this.schoolList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.schoolList = tmp
          this.schoolCurrentPage += 1
        }
      })
    },
    getClubList () {
      this.clubList = []
      this.clubCurrentPage = 1
      this.$service.getClubList(this.$api.clublList, {page: this.clubCurrentPage}).then((res) => {
        if (res.code === 2000) {
          let data = res.data.data
          for (let index in data) {
            this.clubList.push(data[index])
          }
          this.clubCurrentPage += 1
        }
      })
    },
    syncClubList () {
      this.$service.syncClubList(this.$api.clublList, {page: this.clubCurrentPage}).then((res) => {
        if (res.code === 2000) {
          let data = res.data.data
          let tmp = []
          tmp = this.clubList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.clubList = tmp
          this.clubCurrentPage += 1
        }
      })
    },
    getClassList () {
      this.classList = []
      this.classCurrentPage = 1
      this.$service.getClassList(this.$api.classList, {page: this.classCurrentPage}).then((res) => {
        if (res.code === 2000) {
          this.classList = res.data.data
          this.classCurrentPage += 1
        }
      })
    },
    syncClassList () {
      this.$service.syncClassList(this.$api.classList, {page: this.classCurrentPage}).then((res) => {
        if (res.code === 2000) {
          let data = res.data.data
          let tmp = []
          tmp = this.classList
          for (let index in data) {
            tmp.push(data[index])
          }
          this.classList = tmp
          this.classCurrentPage += 1
        }
      })
    },
    clearTimer () {
      setTimeout(() => {
        this.loading = false
        this.refreshing = false
        clearTimeout(this.timer)
      }, 1000)
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    },
    schoolList (v1) {
      this.clearTimer()
    },
    clubList (v1) {
      this.clearTimer()
    },
    classList (v1) {
      this.clearTimer()
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
        width: 47%;
        position: relative;
        height: 160px;
        overflow: hidden;
    }
    .list-item h2{
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
    }
    .ul-list .list-item:nth-child(odd){
        margin-left: 8px;
        float: left;
    }
    .ul-list .list-item:nth-child(even ){
        float: right;
        margin-right: 8px;
    }
    .list-item-img{
        height: 120px;
        display: block;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .list-item-img img{
        border-radius: 3%;
        width: 100%;
    }
    .ul-list .list-item h2{
        margin-top: 12px;
    }
    .ul-list-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 25px;
        line-height: 25px;
        color: #ffffff;
        background-color: #424242;
        opacity: 0.6;
    }

    .popup-bottom {
        width: 100%;
    }
</style>
