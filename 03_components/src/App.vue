<template>
  <tab :titles="titles" @switch-tab="switchTab"></tab>
  <template v-if="currentIndex == 0">
    <home v-on:increase-nav="increaseNav" v-on:off-say-hello="offSayHello"></home>
  </template>
  <template v-else-if="currentIndex == 1">
    <about></about>
  </template>
  <template v-else>
    <profile></profile>
  </template>
</template>

<script>
import { computed } from 'vue'
import emmiter from './utils/emmiter'

import Tab from './components/Tab.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'

export default {
  components: {
    Tab,
    Home,
    About,
    Profile
  },
  provide() {
    return {
      navigations: this.navigations,
      navLength: computed(() => this.navigations.length)
    }
  },
  data() {
    return {
      titles: ['home', 'about', 'profile'],
      contents: ['Home', 'About', 'Profile'],
      currentIndex: 0,
      navigations: ['clothes', 'trousers', 'shows']
    }
  },
  methods: {
    switchTab(index) {
      this.currentIndex = index
    },
    increaseNav() {
      this.navigations.push('cap')
    },
    sayHello(info) {
      console.log(`This is mather, accepted your message: '${info.message}'`)
    },
    offSayHello() {
      emmiter.off('sayHello', this.sayHello)
      console.log('Listen is now canceled.')
    }
  },
  created() {
    emmiter.on('sayHello', this.sayHello)
    emmiter.on('*', (type, info) => console.log(`Type: ${type}\nMsg: ${info.message}`))
  }
}
</script>

<style>
h2 {
  text-align: center;
}
</style>
