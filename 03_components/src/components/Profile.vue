<template>
  <h2>Profile</h2>
  <profile-nav :navigations="navigations" v-on:switch-tab="switchTab"></profile-nav>
  <keep-alive exclude="ProfileAssets">
    <component :is="currentTab" v-model="amount" v-model:modelHouse="house"></component>
  </keep-alive>
  <h3>amount: {{ amount }}</h3>
  <h3>house: {{ house }}</h3>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import ProfileNav from './ProfileNav.vue'
// import ProfileAssets from './ProfileAssets.vue'
const ProfileAssets = defineAsyncComponent(() => import('./ProfileAssets.vue'))
import ProfileResume from './ProfileResume.vue'

export default {
  components: {
    ProfileNav,
    ProfileAssets,
    ProfileResume
  },
  data() {
    return {
      navigations: ['assets', 'resume'],
      currentTab: 'profile-assets',
      amount: 9 ** (9 ** 9),
      house: 'White House'
    }
  },
  methods: {
    switchTab(nav) {
      this.currentTab = 'profile-' + nav
      console.log(`Current tab is ${this.currentTab}`)
    }
  }
}
</script>
