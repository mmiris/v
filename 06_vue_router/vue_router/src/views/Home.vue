<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/goods" class="router">goods</router-link>
    <router-link to="/home/recommendation" class="router">recommendation</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  }
}
</script>
