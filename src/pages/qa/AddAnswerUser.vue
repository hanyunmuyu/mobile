<template>
    <div>
        <mu-appbar title="邀请回答">
            <mu-icon-button icon="arrow_back" @click="goBack" slot="left"/>
            <mu-flat-button label="发问" slot="right" class="demo-flat-button" primary/>
        </mu-appbar>
        <mu-text-field style="text-align: left;width: 100%" icon="search" hintText="邀请同学/社团/高校回答问题"/>
        <mu-list>
            <mu-list-item style="text-align: left" v-for="index in 15" :title="'hanyunhanyun'+index" :key="index">
                <mu-avatar src="/static/images/morning.jpg" slot="leftAvatar"/>
                <mu-raised-button style="margin-right: 50px" label="邀请" slot="right" icon="add" primary/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
  name: 'AddAnswerUser',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
