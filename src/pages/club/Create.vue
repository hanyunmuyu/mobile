<template>
<div>
    <mu-appbar title="创建社团">
        <mu-icon-button @click="goBack" icon="arrow_back" slot="left"/>
    </mu-appbar>
    <mu-list>
        <mu-list-item>
            <mu-avatar src="/static/images/morning.jpg"/>
        </mu-list-item>
        <mu-list-item>
            <mu-text-field hintText="输入社团名称" value=""/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
        <mu-list-item>
            <mu-select-field v-model="game1" label="选择学校">
                <mu-menu-item v-for="(text,index) in list" :key="index" :value="index" :title="text" />
            </mu-select-field>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
        <mu-list-item>
            <mu-select-field v-model="game1" label="选择分类">
                <mu-menu-item v-for="(text,index) in list" :key="index" :value="index" :title="text" />
            </mu-select-field>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
    </mu-list>
    <mu-raised-button label="创建" primary/>
</div>
</template>

<script>
export default {
  name: 'CreateClub',
  data () {
    return {
      game1: 0,
      list: ['阴阳师', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀']
    }
  },
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
