<script setup>
import { ref, getCurrentInstance } from 'vue'

let gretting = ref('来啦，老弟！！！')

const instance = getCurrentInstance()

console.log(instance.appContext.config.globalProperties.$name)
</script>

<template>
  <Teleport to="#other">
    <div>
      <h2>{{ gretting }}</h2>
    </div>
  </Teleport>
</template>
