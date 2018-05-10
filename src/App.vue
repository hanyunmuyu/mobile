<template>
    <div id="app">
        <!--<img src="/static/logo.png">-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/pages/common/BottomNav'

export default {
  name: 'App',
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
