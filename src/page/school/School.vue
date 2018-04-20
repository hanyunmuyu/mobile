<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab to="/school/shetuan" value="shetuan" title="社团"/>
            <mu-tab to="/school/school" value="school" title="校园"/>
            <mu-tab to="/school/class" value="class" title="班级"/>
        </mu-tabs>
        <div v-if="activeTab === 'shetuan'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh(activeTab)"/>
            <ul class="ul-list">
                <li v-for="(item,index) in shetuanList" class="list-item" :key="index" @click.stop="goToShetuan">
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
        <div v-if="activeTab === 'school'">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <ul class="ul-list">
                <li v-for="(item,index) in schoolList" class="list-item" :key="index"  @click="goToShetuan">
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
                <li v-for="(item,index) in classList" class="list-item" :key="index"  @click="goToShetuan">
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
      schoolList: [
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
      ],
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
  },
  methods: {
    goToShetuan () {
      this.$router.push('/shetuan')
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
      this.refreshing = true
      let tag = this.activeTab
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push({
            image: '/static/images/breakfast.jpg',
            title: '河南工业大学' + i,
            detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
          })
        }
        if (tag === 'shetuan') {
          this.shetuanList = list
        } else if (tag === 'school') {
          this.schoolList = list
        } else {
          this.classList = list
        }
        this.refreshing = false
      }, 2000)
    },
    loadMore () {
      this.loading = true
      let tag = this.activeTab
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          if (tag === 'shetuan') {
            this.shetuanList.push({
              image: '/static/images/water-plant.jpg',
              title: '轮滑社团--------------' + i,
              detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
            })
          } else if (tag === 'school') {
            this.schoolList.push({
              image: '/static/images/water-plant.jpg',
              title: '河南工业大学---------' + i,
              detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
            })
          } else {
            this.classList.push({
              image: '/static/images/water-plant.jpg',
              title: '经贸八班--------' + i,
              detail: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
            })
          }
        }
        this.loading = false
      }, 2000)
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
  computed: {
    activeTab: {
      get () {
        return this.$route.params.tab
      },
      set (activeTab) {}
    }
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
        overflow: hidden;
    }
    .list-item-img img{
        width: 100%;
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
