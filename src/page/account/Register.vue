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
            <mu-text-field type="password" v-model="confirm" required icon="lock" hintText="确认密码"/><br/>
            <mu-raised-button full-width label="注册" @click="register"  primary/>
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
      username: 'hanyun',
      password: '123456',
      confirm: '123456',
      toast: false,
      msg: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    register () {
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.loading = false
      }, 5000)

      this.$service.register(this.$api.register, {userName: this.username, userPwd: this.password}).then((res) => {
        this.toast = true
        this.msg = res.msg
        this.$store.state.loading = false
        setTimeout(() => {
          this.toast = false
          if (res.code === 2000) {
            let userInfo = {}
            for (let k in res.data) {
              userInfo[k] = res.data[k]
              localStorage.setItem(k, res.data[k])
            }
            this.$store.commit('login', userInfo)
            this.$router.back()
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
