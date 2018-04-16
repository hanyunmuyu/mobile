<template>
    <div>

        <mu-list>
            <mu-list-item>
                <mu-avatar slot="left" src="/static/images/honey.jpg"/>
                <!--<span class="mu-item-title-row">寒云</span>-->
                <mu-flat-button label="登录/注册" primary @click="login" />
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
        </mu-list>
        <mu-divider inset/>

        <mu-list>
            <mu-list-item>
                <mu-icon value="favorite" slot="left"/>
                <span class="mu-item-title-row">收藏的文章</span>
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
    }
  }
}
</script>
<style>
.demo-icon-badge{
    display: inline-block;
}
</style>
