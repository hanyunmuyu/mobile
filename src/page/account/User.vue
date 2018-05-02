<template>
    <div>
        <mu-appbar title="编辑个人资料">
            <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
        </mu-appbar>
        <mu-list>
            <mu-list-item>
                <mu-icon value="account_box" slot="left"/>
                <mu-text-field hintText="个性签名" :value="userInfo.user_name"/>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
            <!--<mu-list-item>-->
            <!--<mu-icon value="school" slot="left"/>-->
            <!--<mu-select-field v-model="school">-->
            <!--<mu-menu-item v-for="(item,index) in schoolList" :value="item.id" :key="index" :title="item.name"/>-->
            <!--</mu-select-field>-->
            <!--<mu-icon value="keyboard_arrow_right" slot="right"/>-->
            <!--</mu-list-item>-->
            <mu-list-item>
                <mu-icon value="location_on" slot="left"/>
                <span class="mu-item-title-row space" @click="open('bottom')">家乡所在地：{{district}}</span>
                <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>

            <!--<mu-list-item>-->
            <!--<mu-icon value="account_circle" slot="left"/>-->
            <!--<mu-radio label="男" name="group" class="space" nativeValue="1" v-model="gender"/>-->
            <!--<mu-radio label="女" name="group" class="space" nativeValue="2" v-model="gender"/>-->
            <!--<mu-icon value="keyboard_arrow_right" slot="right"/>-->
            <!--</mu-list-item>-->

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

        <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
            <mu-appbar title="">
                <mu-flat-button slot="left" label="确认" color="white" @click="select('bottom')"/>
                <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
            </mu-appbar>
            <mu-content-block>
                <p class="mu-item-title-row selected-text-center">你选择了：{{district.province}}</p>
                <div class="picker-container">
                    <ul>
                        <li>
                            <select v-model="district.province">
                                <option :value="item" v-for="(item,index) in provinces"
                                        v-if="item.id===district.province"
                                        selected
                                        :key="index"> {{item.name}}
                                </option>
                                <option :value="item" v-else :key="index"> {{item.name}}</option>
                            </select>
                        </li>
                        <li>
                            <select v-model="district.city">
                                <option v-for="(item,index) in cities" v-if="item.id===district.city" selected
                                        :key="index"
                                        :value="item"> {{item.name}}
                                </option>
                                <option :value="item" v-else :key="index"> {{item.name}}
                                </option>
                            </select>
                        </li>
                        <li>
                            <select v-model="district.area">
                                <option v-for="(item,index) in areas" v-if="item.id===district.city" selected
                                        :key="index"
                                        :value="item"> {{item.name}}
                                </option>
                                <option :value="item" v-else :key="index"> {{item.name}}
                                </option>
                            </select>
                        </li>
                    </ul>
                </div>
            </mu-content-block>
        </mu-popup>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

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
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      school: 2,
      schoolList: ['请选择高校', '河南工业大学', '郑州大学', '河南财经政法大学'],
      district: {
        province: null,
        city: null,
        area: null
      },
      province: null,
      city: null,
      area: null,
      provinces: [],
      cities: [],
      areas: []
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    update () {},
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    select (position) {
      this[position + 'Popup'] = false
    },
    getProvinces () {
      this.$service.getArea(this.$api.areaUrl, {level: 1}).then((r) => {
        this.provinces = r.data
      })
    },
    getCity (id, level) {
      this.$service.getArea(this.$api.areaUrl, {id: id, level: level}).then((r) => {
        if (level === 2) {
          this.cities = r.data
        } else if (level === 3) {
          this.areas = r.data
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'footerActive',
      'token',
      'userInfo'
    ])
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    },
    'district.province' (newVal) {
      this.getCity(newVal.id, 2)
    },
    'district.city' (newVal) {
      this.getCity(newVal.id, 3)
    }
  },
  mounted () {
    this.getProvinces()

    this.$axios({
      method: 'get',
      url: this.$api.schoolList
    }).then((res) => {
      return res.data
    }).then((res) => {
      this.school = 1
      this.schoolList = res.data
    })
  }
}
</script>
<style lang="less">

    .mu-menu-item-title {
        width: 100%;
        text-align: left;
        margin-left: 0;
    }

    .mu-dropDown-menu-text-overflow {
        text-align: left;
    }

    .space {
        float: left;
        font-size: 15px;
    }

    .demo-popup-bottom {
        width: 100%;
        max-width: 375px;
        min-height: 200px;
    }

    .selected-text-center {
        text-align: center;
        width: 100%;
        position: relative;
        display: block;
    }
    .picker-container {
        margin-top: 50px;
        width: 100%;
        display: block;
        ul {
            width: 100%;
            display: block;
            li {
                text-align: center;
                width: 33%;
                display: block;
                float: left;
                overflow: hidden;
                select {
                    width: 100%;
                }
            }
        }
    }
</style>
