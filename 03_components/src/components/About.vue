<template>
  <h2>{{ name }}</h2>
  <about-nav v-bind:navigations="navigations">
    <template v-slot:default="slotProps">
      <i>{{ slotProps.item }}</i>
    </template>

    <template v-slot:shadow="slotProps">
      <h2>{{ slotProps.addr }}</h2>
    </template>
  </about-nav>
</template>

<script>
import AboutNav from './AboutNav.vue'

export default {
  components: {
    AboutNav
  },
  data() {
    return {
      name: 'About',
      navigations: ['contact us', 'team info', 'cooperation']
    }
  }
}
</script>
