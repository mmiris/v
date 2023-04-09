<template>
  <div>
    <template v-for="item in navigations">
      <slot v-bind:item="item">
        <h3>AboutNav</h3>
      </slot>
    </template>
  </div>
  <slot name="shadow" :addr="addr"></slot>
</template>

<script>
export default {
  props: {
    navigations: {
      type: Array,
      default: () => ['noooooôöòóœøōõ']
    }
  },
  data() {
    return {
      name: 'AboutNav',
      addr: 'naive'
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}
</style>
