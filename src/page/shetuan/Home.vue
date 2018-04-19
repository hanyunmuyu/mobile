<template>
    <div>
        <div class="header">
            <mu-appbar title="莘莘团">
                <mu-icon-button icon="arrow_back" slot="left" @click="goBack"/>
            </mu-appbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
