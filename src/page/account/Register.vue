<template>
    <div>
        <div class="header">
            <mu-appbar title="登录">
            </mu-appbar>
        </div>
        <mu-text-field icon="account_circle" hintText="用户名"/><br/>
        <mu-text-field icon="lock" hintText="密码"/><br/>
        <mu-raised-button label="登录" primary/>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  },
  methods: {
    handleToggle (key) {
      this[key] = !this[key]
    }
  }
}
</script>
<style>
    .demo-icon-badge{
        display: inline-block;
    }
</style>
