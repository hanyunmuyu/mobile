<template>
    <div>
        <mu-appbar title="编辑个人资料">
            <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
        </mu-appbar>
        <mu-list>
            <mu-list-item>
                <mu-icon value="account_box" slot="left"/>
                <!--<mu-avatar slot="left"-->
                <!--src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523943299425&di=25b779282f457ba10df131b6b981a33e&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Flvyou%2Flist%2F20150402%2FW020150402384247571517.jpg"/>-->
                <mu-text-field hintText="个性签名" value="寒云"/>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="school" slot="left"/>
                <mu-select-field v-model="school">
                    <mu-menu-item v-for="(item,index) in schoolList" :value="index" :key="index" :title="item"/>
                </mu-select-field>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>

            <mu-list-item>
                <mu-icon value="account_circle" slot="left"/>
                <mu-radio label="男" name="group" class="space" nativeValue="1" v-model="gender"/>
                <mu-radio label="女" name="group" class="space"  nativeValue="2" v-model="gender"/>
                <mu-radio label="保密" name="group" class="space"  nativeValue="3" v-model="gender"/>

                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>

            <mu-list-item>
                <mu-icon value="phone" slot="left"/>
                <mu-text-field type="number" hintText="电话号码"/>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-icon value="edit" slot="left"/>
                <mu-text-field multiLine :rows="2" hintText="个性签名"/>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <mu-list-item>
                <mu-raised-button label="保存" @click="update" primary/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user',
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false,
      school: 1,
      schoolList: ['请选择高校', '河南工业大学', '郑州大学', '河南财经政法大学'],
      gender: '1'
    }
  },
  methods: {
    handleToggle (key) {
      this[key] = !this[key]
    },
    login () {
      this.$router.push('/login')
    },
    goBack () {
      this.$router.back()
    },
    update () {
    }
  },
  computed: {
    ...mapGetters([
      'footerActive',
      'token'
    ])
  }
}
</script>
<style>
    .mu-menu-item-title {
        width: 100%;
        text-align: left;
        margin-left: 0;
    }

    .mu-dropDown-menu-text-overflow {
        text-align: left;
    }
    .space{
        float: left;
        width: 33%;
    }
</style>
