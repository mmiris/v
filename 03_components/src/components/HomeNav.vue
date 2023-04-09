<template>
  <div class="nav">
    <span v-for="(nav, index) in navigations" :key="index">
      {{ nav }}
    </span>
  </div>
  <h3>{{ navLength }}</h3>
  <div>
    <button v-on:click="sayHello">sayHello</button>
    <button v-on:click="introduce">introduce</button>
  </div>
</template>

<script>
import emmiter from '@/utils/emmiter.js'

export default {
  inject: ['navigations', 'navLength'],
  methods: {
    sayHello() {
      emmiter.emit('sayHello', { message: "Hello, i'm home-nav component!" })
    },
    introduce() {
      emmiter.emit('introduce', { message: `I'm shadow.` })
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}

span:hover {
  color: skyblue;
}

h3 {
  text-align: center;
}
</style>
