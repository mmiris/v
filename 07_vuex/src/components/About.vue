<template>
  <h2>About</h2>
  <h5>About age >> {{ $store.state.about.aboutAge }}</h5>
  <button v-on:click="incrementAge({ number: 2 })">incrementAge</button>
  <button v-on:click="multiplyAge({ number: 2 })">multiplyAge</button>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const incrementAge = (payload) => {
      store.commit('about/incrementAge', payload)
    }

    const multiplyAge = (payload) => {
      store.dispatch('about/multiplyAge', payload).then((res) => console.log(res))
    }

    return {
      incrementAge,
      multiplyAge
    }
  }
}
</script>
