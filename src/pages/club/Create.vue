<template>
<div>
    <mu-appbar title="创建社团">
        <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
    </mu-appbar>
    <mu-list>
        <mu-list-item>
            <mu-icon value="account_box" slot="left"/>
            <mu-text-field hintText="社团名称" value=""/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
    </mu-list>
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
