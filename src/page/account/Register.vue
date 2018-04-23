<template>
    <div>
        <div class="header">
            <mu-appbar title="注册">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
        <div class="login">
            <mu-text-field type="text" v-model="username" required icon="account_circle" hintText="用户名"/><br/>
            <mu-text-field type="password" v-model="password" required icon="lock" hintText="密码"/><br/>
            <mu-text-field type="confirm" v-model="confirm" required icon="lock" hintText="确认密码"/><br/>
            <mu-raised-button full-width label="注册" @click="login"  primary/>
        </div>
        <mu-toast v-if="toast" :message="msg"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      confirm: '',
      toast: false,
      msg: ''
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
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.loading = false
      }, 5000)
      let params = new URLSearchParams()
      // 你要传给后台的参数值 key/value
      params.append('userName', this.username)
      params.append('userPwd', this.password)
      this.$axios({
        method: 'post',
        url: this.$api.login,
        data: params
      }).then((res) => {
        return res.data
      }).then((res) => {
        this.toast = true
        this.msg = res.msg
        this.$store.state.loading = false
        setTimeout(() => {
          this.toast = false
          if (res.code === 2000) {
            localStorage.setItem('token', res.data.token)
            this.$router.push('/')
          }
        }, 2000)
      })
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  beforeCreate: function () {
    let token = this.$store.state.token
    if (!Object.is(token, null)) {
      this.$router.push('/')
    }
  }
}
</script>
<style>
    .login{
        margin-top: 168px;
        vertical-align: center;
    }
    .mu-text-field-hint.show{
        text-align: left;
    }
</style>
