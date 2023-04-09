<template>
  <h1>{{ myAmount }}</h1>
  <button v-on:click="increase">INCREASE</button>
  <br />
  <input type="text" :value="modelValue" v-on:input="changeAmount($event)" />
  <input type="text" v-model="house" />
</template>

<script>
export default {
  name: 'ProfileAssets',
  props: ['modelValue', 'modelHouse'],
  emits: ['update:modelValue', 'update:modelHouse'],
  data() {
    return {
      myAmount: 9 * 9 ** 9
    }
  },
  computed: {
    house: {
      get() {
        return this.modelHouse
      },
      set(value) {
        this.$emit('update:modelHouse', value)
      }
    }
  },
  methods: {
    increase() {
      this.myAmount *= 9
    },
    changeAmount(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
