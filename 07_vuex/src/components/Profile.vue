<template>
  <h2>Profile</h2>
  <h5>Profile name >> {{ name }}</h5>
  <h5>Profile age >> {{ age }}</h5>
  <h5>Profile doublAge >> {{ doublueAge }}</h5>
  <button v-on:click="changeName({ name: 'naive' })">changeName</button>
  <button v-on:click="increaseAge({ number: 6 })">increseAge</button>
  <button v-on:click="multiplyAge({ number: 2 })">multiplyAge</button>
</template>

<script>
import { computed } from 'vue'
import { useStore, mapMutations, mapActions } from 'vuex'
import { useMapState, useMapGetters } from '@/hooks'

export default {
  setup() {
    const store = useStore()
    // const age = computed(() => store.state.profile.age)
    // const doublueAge = computed(() => store.getters['profile/doubleAge'])

    return {
      // age,
      // doublueAge,
      ...useMapState(['name', 'age'], 'profile'),
      ...useMapGetters({ doublueAge: 'doubleAge' }, 'profile'),
      ...mapMutations('profile', ['changeName', 'increaseAge']),
      ...mapActions('profile', ['multiplyAge'])
    }
  }
}
</script>
