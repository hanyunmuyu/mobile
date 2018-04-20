<template>
    <div>
        <div class="header">
            <mu-appbar title="消息">
                <mu-icon-button icon="add_alert" slot="right"/>
            </mu-appbar>
        </div>
        <mu-list>
            <mu-list-item v-for="index in 10" title="这个周末一起吃饭么?" :key="index">
                <mu-avatar src="/static/images/honey.jpg" slot="leftAvatar"/>
                <span slot="describe">
                            周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </span>
                <mu-icon-menu slot="right" icon="keyboard_arrow_down" tooltip="操作">
                    <mu-menu-item title="回复"/>
                    <mu-menu-item title="标记"/>
                    <mu-menu-item title="删除"/>
                </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      list: [
        {
          image: '/static/hats.jpg',
          title: '河南工业大学',
          author: '河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介河南工业大学简介'
        }, {
          image: '/static/hats.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '/static/images/camera.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: '/static/images/hats.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '/static/images/honey.jpg',
          title: 'Honey',
          author: 'yuyang'
        }, {
          image: '/static/images/morning.jpg',
          title: 'Morning',
          author: 'mokayi'
        }, {
          image: '/static/images/vegetables.jpg',
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style>

</style>
