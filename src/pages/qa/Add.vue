<template>
    <div>
        <mu-appbar title="问答">
            <mu-icon-button  @click="goBack" icon="arrow_back" slot="left"/>
            <mu-flat-button label="邀请回答" icon="group_add" @click="addAnswerUser" slot="right" primary/>
        </mu-appbar>
        <mu-divider/>
        <mu-divider/>
        <mu-divider/>
        <mu-text-field style="width: 100%" icon="" v-model="value" hintText="输入你的问题"  multiLine :rows="1" :rowsMax="6"/><br/>
        <mu-text-field style="width: 100%" hintText="描述一下你的问题"/>
        <!--<div class="demo-step-container">-->
            <!--<mu-stepper :activeStep="activeStep">-->
                <!--<mu-step>-->
                    <!--<mu-step-label>-->
                        <!--提问-->
                    <!--</mu-step-label>-->
                <!--</mu-step>-->
                <!--<mu-step>-->
                    <!--<mu-step-label>-->
                        <!--描述问题-->
                    <!--</mu-step-label>-->
                <!--</mu-step>-->
                <!--<mu-step>-->
                    <!--<mu-step-label>-->
                        <!--邀请回答-->
                    <!--</mu-step-label>-->
                <!--</mu-step>-->
            <!--</mu-stepper>-->
            <!--<div class="demo-step-content">-->
                <!--<p v-if="finished">-->
                    <!--都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置-->
                <!--</p>-->
                <!--<template v-if="!finished">-->
                    <!--<p>-->
                        <!--{{content}}-->
                    <!--</p>-->
                    <!--<div>-->
                        <!--<mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>-->
                        <!--<mu-raised-button class="demo-step-button" :label="activeStep === 2 ? '完成' : '下一步'" primary @click="handleNext"/>-->
                    <!--</div>-->
                <!--</template>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      value: '',
      activeStep: 0
    }
  },
  computed: {
    content () {
      let message = ''
      // switch (this.activeStep) {
      //   case 0:
      //     message = '添加问题'
      //     break
      //   case 1:
      //     message = '描述问题'
      //     break
      //   case 2:
      //     message = '邀请问答'
      //     break
      //   default:
      //     message = '等待答复'
      //     break
      // }
      return message
    },
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    addAnswerUser () {
      this.$router.push('/addAnswerUser')
    },
    goBack () {
      this.$router.back()
    },
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<style scoped>

</style>
