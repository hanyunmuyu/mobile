<template>
    <div>
        <div class="header">
            <mu-appbar title="登录">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <div class="login">
            <mu-text-field type="text" v-model="username" required icon="account_circle" hintText="用户名"/><br/>
            <mu-text-field type="password" v-model="password" required icon="lock" hintText="密码"/><br/>
            <mu-raised-button label="登录" @click="login"  primary/>
        </div>

    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false,
      username: '',
      password: ''
    }
  },
  methods: {
    handleToggle (key) {
      this[key] = !this[key]
    },
    goBack () {
      this.$router.back()
    },
    login () {
      localStorage.setItem('token', 1)

      // let url = 'http://127.0.0.1:83/api/v1/login'
      var params = new URLSearchParams()
      // 你要传给后台的参数值 key/value
      params.append('username', this.username)
      params.append('password', this.password)
      this.$axios({
        method: 'post',
        url: this.$api.login,
        data: params
      }).then((res) => {
        // this.$store.state.loading = true
        // console.log(res.data)
        return res.data.data
      }).then((res) => {
        this.$store.state.loading = false
        console.log(res.token)
        localStorage.setItem('token', res.token)
      })
    }
  }
}
</script>
<style>
.login{
    margin-top: 168px;
    vertical-align: center;
}
</style>
