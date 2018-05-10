<template>
    <div class="content">
        <ul style="width: 5000px">
           <li v-for="a in 100" :key="a">{{a}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'School'
}
</script>

<style scoped lang="less">
    .content{
        width: 100%;
        display: block;
        overflow-x: scroll;
        height: 20px;
        ul {
            display: block;
            height: 20px;
            li{
                text-align: center;
                float: left;
                line-height: 20px;
                min-width: 50px;
                display: inline-block;
            }
        }
    }
    ::-webkit-scrollbar{
        display: none;
    }
</style>
