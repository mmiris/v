<template>
  <h1>{{ amount }}</h1>
  <button v-on:click="increase">INCREASE</button>
  <h2>{{ animateAmount.toFixed(0) }}</h2>
  <hr />
  <input type="text" :value="modelValue" v-on:input="changeAmount" />
  <br />
  <input type="text" v-model="house" />
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'ProfileAssets',
  props: ['modelValue', 'modelHouse'],
  emits: ['update:modelValue', 'update:modelHouse'],
  data() {
    return {
      amount: 9 * 9 ** 9,
      animateAmount: 0
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
      this.amount *= 9
    },
    changeAmount(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  },
  watch: {
    amount() {
      gsap.to(this, {
        duration: 1,
        animateAmount: this.amount
      })
    }
  }
}
</script>
