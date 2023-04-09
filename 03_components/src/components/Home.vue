<template>
  <h2>Home</h2>
  <div>
    <button v-on:click="increseNav">increaseNav</button>
    <button v-on:click="offSayHello">offSayHello</button>
  </div>
  <home-nav></home-nav>
</template>

<script>
import HomeNav from './HomeNav.vue'
export default {
  components: {
    HomeNav
  },
  emits: ['increaseNav', 'offSayHello'],
  methods: {
    increseNav() {
      this.$emit('increaseNav')
    },
    offSayHello() {
      this.$emit('offSayHello', "I'm home, cancel emitter please.")
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>
