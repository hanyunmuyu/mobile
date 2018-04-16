<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="search" slot="right" @click="search"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item v-for="index in 50" title="这个周末一起吃饭么?" :key="index">
                <mu-avatar src="/static/images/honey.jpg" slot="leftAvatar"/>
                <span slot="describe">
                            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                 </span>
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
      bottomNav: 'explore',
      bottomNavColor: 'explore',
      activeTab: 'school',
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      list: [
        {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          author: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '/static/images/camera.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: '/static/images/hats.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '/static/images/honey.jpg',
          title: 'Honey',
          author: 'yuyang'
        }, {
          image: '/static/images/morning.jpg',
          title: 'Morning',
          author: 'mokayi'
        }, {
          image: '/static/images/vegetables.jpg',
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }
      ]
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    },
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    search () {
      this.$router.push('/search')
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
  }
}
</script>
<style>
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
</style>
