<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="school" title="校园"/>
            <mu-tab value="shetuan" title="社团"/>
            <mu-tab value="class" @active="handleActive" title="班级"/>
        </mu-tabs>
        <div>
            <div v-if="activeTab === 'school'">
                <mu-grid-list>
                    <mu-grid-tile v-for="(tile, index) in list" :key="index">
                        <img :src="tile.image"/>
                        <span slot="title" @click="open('bottom')">{{tile.title}}</span>
                        <span slot="subTitle" @click="open('bottom')">{{tile.author}}</span>
                        <mu-icon-button icon="favorite" slot="action"/>
                    </mu-grid-tile>
                </mu-grid-list>
                <mu-popup position="bottom" popupClass="popup-bottom" :open="bottomPopup" @close="close('bottom')">
                    <mu-appbar title="简介">
                        <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
                    </mu-appbar>
                    <mu-content-block>
                        <p>
                            河南工业大学（Henan University of
                            Technology）位于河南省省会郑州，由河南省人民政府和国家粮食局共建，入选中西部高校基础能力建设工程、卓越工程师教育培养计划、卓越农林人才教育培养计划、2011计划。
                            学校前身是中央粮食干部学校，是经国务院批准在1956年创建的全国唯一一所粮食工程类大学，先后隶属于粮食部、机械部、商业部和国内贸易部。
                            1959年开展本科教育。
                            1981年开始研究生教育。
                            1998年划归河南省管理。
                            2010年，河南省人民政府和国家粮食局签约共建河南工业大学。
                            截至2017年10月，学校占地总面积193.8 万平方米，建筑总面积 97万平方米；拥有莲花街校区、嵩山路校区、中原路校区三个校区；现有20 个教学单位， 69个本科专业，20
                            个硕士学位授权一级学科，7个硕士专业学位授权类别，18个省一级重点学科，现有专任教师1691人，高级职称教师891人，博士学位教师685人。现有全日制在校生34000余人，其中研究生1400余人，外国留学生300余人；另有继续教育学生18000
                            余人
                        </p>
                    </mu-content-block>
                </mu-popup>
            </div>
            <div v-if="activeTab === 'shetuan'">
                <mu-list>
                    <mu-list-item title="这个周末一起吃饭么?">
                        <mu-avatar src="/static/images/honey.jpg" slot="leftAvatar"/>
                        <span slot="describe">
                            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
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
            <div v-if="activeTab === 'class'">
                <h2>班级</h2>
                <p>
                    这是第三个 tab
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'school',
  data () {
    return {
      bottomNav: 'explore',
      bottomNavColor: 'explore',
      activeTab: 'school',
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
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
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }, {
          image: '/static/images/water-plant.jpg',
          title: 'water',
          author: 'TDDyyyyyyy'
        }
      ]
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    },
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>
<style>
    .header {
        /*position: fixed;*/
        top: 0;
        width: 100%;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .popup-bottom {
        width: 100%;
        max-width: 375px;
    }
</style>
