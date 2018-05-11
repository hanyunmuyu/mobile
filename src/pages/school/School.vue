<template>
    <div class="content">
        <ul style="width: 5000px">
            <li v-for="a in 100" :key="a">
                郑州东大学城{{a}}
            </li>
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
        height: 30px;
        color: #7e57c2;
        ul {
            display: block;
            height: 30px;
            li{
                text-align: center;
                float: left;
                line-height: 20px;
                margin: 5px;
                min-width: 50px;
                display: inline-block;
                :hover{
                    color: black;
                }
            }
        }
    }
    ::-webkit-scrollbar{
        display: none;
    }
</style>
