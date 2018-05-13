<template>
<div>
    <mu-appbar title="创建社团">
        <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
    </mu-appbar>
</div>
</template>

<script>
export default {
  name: 'CreateClub',
  methods: {
    goBack () {
      this.$router.back()
    },
    tab (val) {
      this.activeCity = val
    },
    createClub () {
      this.$router.push('/club/create')
    }
  }
}
</script>

<style scoped>

</style>
