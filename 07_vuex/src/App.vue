<template>
  <div>
    <h5>App age >> {{ $store.state.age }}</h5>
    <nav-bar :navigations="navigations" v-on:switchNav="switchNav"></nav-bar>
    <component :is="navigations[currentIndex]"></component>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Profile from './components/Profile.vue'

export default {
  components: {
    NavBar,
    Home,
    About,
    Profile
  },
  setup() {
    const navigations = ref(['home', 'about', 'profile'])
    const currentIndex = ref(0)
    const switchNav = (index) => {
      currentIndex.value = index
    }
    return {
      navigations,
      currentIndex,
      switchNav
    }
  }
}
</script>
