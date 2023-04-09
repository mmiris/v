<template>
  <div>
    <template v-for="(nav, index) in navigations" :key="index">
      <span v-on:click="switchTab(nav)">{{ nav }}</span>
    </template>
  </div>
</template>

<script>
export default {
  emits: ['switchTab'],
  props: {
    navigations: {
      type: Array,
      default: () => ['noôöòóœøōõ~~~']
    }
  },
  methods: {
    switchTab(nav) {
      this.$emit('switchTab', nav)
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}

span {
  cursor: pointer;
}
</style>
