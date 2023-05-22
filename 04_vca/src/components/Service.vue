<template>
  <div>
    <h2>Service</h2>
    <h4>life cycle methods</h4>
    <div>{{ addr }}</div>
    <button v-on:click="changeAddr">changeAddr</button>

    <h4>use hooks</h4>
    <div>localData: {{ data }}</div>
    <button v-on:click="changeData">changeData</button>
    <button v-on:click="changeTitle">changeTitle</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useLocalStorage, useTitle } from '@/hooks'

let addr = ref('天那边')

const changeAddr = () => {
  addr.value = 'Heaven over there'
}

onMounted(() => console.log('组件已挂载。。。'))
onUpdated(() => console.log('界面发生更新。。。'))

// let data = useLocalStorage('info', { name: 'shadow', age: 2 })
let data = useLocalStorage('info')
const changeData = () => {
  data.value.name = 'naive'
}

let title = useTitle()
const changeTitle = () => {
  title.value = '哈哈哈'
}
</script>
