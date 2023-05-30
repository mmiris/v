<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/goods" class="router">goods</router-link>
    <!-- <router-link to="/home/recommendation" class="router">recommendation</router-link> -->
    <router-link to="/home/recommendation" custom v-slot="props">
      <button v-on:click="props.navigate">recommendation</button>
      <button v-on:click="showProps(props)">showProps</button>
    </router-link>
    <router-view v-slot="{ Component, route }">
      <p>{{ route.path }}</p>
      <transition name="shadow">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
  methods: {
    showProps(props) {
      console.log(props['route'])
      for (const prop in props) {
        console.log(prop + ' -->>', props[prop])
      }
    }
  }
}
</script>

<style scoped>
.shadow-enter-from,
.shadow-leave-to {
  opacity: 0;
}

.shadow-enter-active,
.shadow-leave-active {
  transition: opacity ease-out 1s;
}
</style>
