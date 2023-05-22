<template>
  <h2>{{ gretting }}</h2>
  <h2>obj.greeting: {{ obj.gretting.value }}</h2>
  <h2>info.gretting: {{ info.gretting }}</h2>
  <h2>info: {{ info.name }}</h2>
  <h2>readonlyInfo: {{ readonlyInfo.name }}</h2>
  <button v-on:click="assignInfo">AssignInfo</button>
  <home-view :readonlyInfo="readonlyInfo"></home-view>
</template>

<script>
import HomeView from '@/components/HomeView.vue'
import { reactive, readonly, ref } from 'vue'

export default {
  components: {
    HomeView
  },
  setup() {
    const gretting = ref('Hello, Vue Composition API!')
    const obj = { gretting }
    const info = reactive({ name: 'shadow', age: 1, gretting })
    const readonlyInfo = readonly(info)

    const assignInfo = () => {
      info.name = 'iris'
    }

    return {
      gretting,
      obj,
      info,
      readonlyInfo,
      assignInfo
    }
  }
}
</script>
