<template>
    <div>
        <mu-appbar title="设置中心" icon="settings">
            <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            <mu-icon-button icon="settings" @click="setting" slot="right"/>
        </mu-appbar>
        <div class="logout" @click="logout">
            <mu-raised-button label="退出登录" primary/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Setting',
  methods: {
    goBack () {
      this.$router.back()
    },
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
    .logout {
        position: absolute;
        top: 200px;
        width: 100%
    }
</style>
