<template>
  <nav-bar :navigations="navigations" v-on:switchTab="switchTab"></nav-bar>
  <component :is="nav"> </component>
</template>

<script>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Service from './components/Service.vue'
import Profile from '@/components/Profile.vue'

export default {
  components: {
    NavBar,
    Home,
    About,
    Profile,
    Service
  },
  setup() {
    const navigations = ref(['home', 'about', 'service', 'entertainment', 'profile'])
    const nav = ref('home')
    const switchTab = (navParams) => {
      nav.value = navParams
      console.log(nav.value)
    }

    return {
      navigations,
      nav,
      switchTab
    }
  }
}
</script>

<style>
body {
  margin-bottom: 120px;
}
</style>
