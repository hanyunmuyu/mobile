<template>
    <div class="picker-container">
        <ul>
            <li>
                <select v-model="district.province">
                    <option :value="item.id" v-for="(item,index) in provinces" v-if="item.id===district.province"
                            selected
                            :key="index"> {{item.name}}
                    </option>
                    <option :value="item.id" v-else :key="index"> {{item.name}}</option>
                </select>
            </li>
            <li>
                <select v-model="district.city">
                    <option v-for="(item,index) in cities" v-if="item.id===district.city" selected :key="index"
                            :value="item.id"> {{item.name}}
                    </option>
                    <option :value="item.id" v-else :key="index"> {{item.name}}
                    </option>
                </select>
            </li>
            <li>
                <select v-model="district.area">
                    <option v-for="(item,index) in areas" v-if="item.id===district.city" selected :key="index"
                            :value="item.id"> {{item.name}}
                    </option>
                    <option :value="item.id" v-else :key="index"> {{item.name}}
                    </option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      district: {
        province: null,
        city: null,
        area: null
      },
      provinces: [],
      cities: [],
      areas: []
    }
  },
  methods: {
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
  mounted () {
    this.getProvinces()
  },
  watch: {
    'district.province' (newVal) {
      this.getCity(newVal, 2)
    },
    'district.city' (newVal) {
      this.getCity(newVal, 3)
    }
  }
}
</script>

<style lang="less">
    .picker-container {
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
                select{
                    width: 100%;
                }
            }
        }
    }
</style>
