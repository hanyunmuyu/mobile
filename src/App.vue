<template>
    <div id="app" ref="app">
            <keep-alive>

            <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        <BottomNav v-show="show"></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/pages/common/BottomNav'

export default {
  name: 'App',
  data () {
    return {
      show: true,
      scrollTop: 0,
      timer: null
    }
  },
  mounted () {
    this.scrollTop = window.scrollY
    window.addEventListener('touchstart', this.showBottom)
    window.addEventListener('touchmove', this.winScroll)
  },
  methods: {
    winScroll () {
      let scrollTop = window.scrollY
      if (Math.abs(scrollTop - this.scrollTop) > 30) {
        this.show = false
        this.scrollTop = scrollTop
        clearTimeout(this.timer)
      }
    },
    showBottom () {
      this.timer = setTimeout(() => {
        this.show = true
      }, 200)
    }
  },
  components: {BottomNav}
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
    }
    ::-webkit-scrollbar{
        display: none;
    }
</style>
