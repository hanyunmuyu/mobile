<template>
    <div>
        <mu-appbar title="个人中心" icon="settings">
            <mu-icon-button icon="settings" @click="setting" slot="right"/>
        </mu-appbar>
        <mu-list>
            <mu-list-item v-if="Object.is(token, null)" @click="login">
                <mu-avatar slot="left" :src="userInfo.avatar"/>
                <!--<span class="mu-item-title-row">寒云{{Object.is(token,null)}}</span>-->
                <!--<mu-flat-button v-if="!Object.is(token, null)" label="寒云" primary/>-->
                <!--<mu-flat-button v-else label="登录/注册" primary @click="login" />-->
                <span class="mu-item-title-row">登录/注册</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item v-else @click="editUserInfo">
                <mu-avatar slot="left" :src="userInfo.avatar"/>
                <span class="mu-item-title-row">{{userInfo.user_name}}<span style="width: 80%;text-align: right">编辑个人信息</span></span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
        <mu-divider inset/>

        <mu-list>
            <mu-list-item to="/user/collection">
                <mu-icon value="favorite" slot="left"/>
                <span class="mu-item-title-row">我的收藏</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="insert_comment" slot="left"/>
                <span class="mu-item-title-row">发表的评论</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
        <mu-divider inset/>

        <mu-list>
            <mu-list-item>
                <mu-icon value="school" slot="left"/>
                <span class="mu-item-title-row">关注的高校</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="group" slot="left"/>
                <span class="mu-item-title-row">关注的社团</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="group_add" slot="left"/>
                <span class="mu-item-title-row">关注的好友</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
        <mu-divider inset/>

        <mu-list>
            <mu-list-item>
                <mu-icon value="star_half" slot="left"/>
                <mu-switch label="夜间模式" labelLeft class="mu-item-title-row" />
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="history" slot="left"/>
                <span class="mu-item-title-row">浏览历史</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
        <mu-divider inset/>

        <mu-list>
            <mu-list-item>
                <mu-icon value="share" slot="left"/>
                <span class="mu-item-title-row">分享莘莘</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="help" slot="left"/>
                <span class="mu-item-title-row">帮助与反馈</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
    },
    login () {
      this.$router.push('/login')
    },
    editUserInfo () {
      this.$router.push('/auth/user')
    },
    setting () {
      this.$router.push('/setting')
    }
  },
  computed: {
    ...mapGetters([
      'footerActive',
      'token',
      'userInfo'
    ])
  }
}
</script>
<style>
.demo-icon-badge{
    display: inline-block;
}
</style>
