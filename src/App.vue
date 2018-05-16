<template>
    <div id="app" ref="app">
        <!--<img src="/static/logo.png">-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <div style="height: 50px"></div>
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
      scrollTop: 0
    }
  },
  mounted () {
    let scrollTop = window.scrollY
    this.scrollTop = scrollTop
    window.addEventListener('touchstart', this.showBottom)
    window.addEventListener('touchmove', this.winScroll)
  },
  methods: {
    winScroll () {
      let scrollTop = window.scrollY
      if (Math.abs(scrollTop - this.scrollTop) > 30) {
        this.show = false
        this.scrollTop = scrollTop
      }
    },
    showBottom () {
      this.show = true
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
</style>
