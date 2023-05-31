<template>
  <div>
    <h2>Home</h2>
    <h3>sAge: {{ sAge }}</h3>
    <h3>sAddr: {{ sAddr }}</h3>
    <template v-for="(value, key) in sGrade">
      <ul>
        <li>{{ `${key} >> ${value}` }}</li>
      </ul>
    </template>
    <button v-on:click="incrementAge({ number: 1 })">incrementAge</button>
    <button v-on:click="decrementAge({ number: 1 })">decrementAge</button>
    <button v-on:click="multiplyAge({ number: 2 })">mutiplyAge</button>
    <!-- <h2>totalScores >> {{ $store.getters.totalScores }}</h2>
    <h2>realTotalScores >> {{ $store.getters.realTotalScores }}</h2>
    <h2>totalMoreNScores >> {{ $store.getters.totalMoreNScores(100) }}</h2> -->
    <h2>totalScores >> {{ totalScores }}</h2>
    <h2>realTotalScores >> {{ realTotalScores }}</h2>
    <h2>totalMoreNScores >> {{ totalMoreNScores(100) }}</h2>
  </div>
</template>

<script>
// import { computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import store from '@/store'
import { useMapState, useMapGetters } from '@/hooks'
import { INCREMENT_AGE, DECREMENT_AGE } from '@/store/mutationsTypes'
import { mapMutations } from 'vuex'

export default {
  // computed: {
  //   ...mapGetters(['totalScores', 'realTotalScores', 'totalMoreNScores'])
  // },
  setup() {
    // const totalScores = computed(() => store.getters.totalScores)

    const store = useStore()

    // let storeGetters = {}
    // const storeGettersFns = mapGetters(['totalScores', 'realTotalScores', 'totalMoreNScores'])
    // for (const fnKey in storeGettersFns) {
    //   storeGetters[fnKey] = computed(storeGettersFns[fnKey].bind({ $store: store }))
    // }

    const storeState = useMapState({ sAge: (state) => state.age, sAddr: (state) => state.addr, sGrade: (state) => state.grade })
    const storeGetters = useMapGetters(['totalScores', 'realTotalScores', 'totalMoreNScores'])

    // const incrementAge = (payload) => {
    //   store.commit(INCREMENT_AGE, payload)
    // }
    // const decrementAge = (payload) => {
    //   store.commit(DECREMENT_AGE, payload)
    // }

    const multiplyAge = (payload) => {
      store.dispatch('multiplyAge', payload).then((res) => console.log(res))
    }

    return {
      // totalScores,
      ...storeGetters,
      ...storeState,
      // incrementAge,
      // decrementAge,
      multiplyAge,
      ...mapMutations({ incrementAge: INCREMENT_AGE, decrementAge: DECREMENT_AGE })
    }
  }
}
</script>
