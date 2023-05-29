<template>
  <router-link to="/home" class="router" active-class="active">Home</router-link>
  <router-link :to="'/profile/' + user" class="router" active-class="active">Profile</router-link>
  <button v-on:click="changeView">Profile</button>
  <h5>{{ $route.fullPath }}</h5>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const user = ref('shadow')
    const router = useRouter()
    const changeView = () => {
      // router.push('/profile/shadow')
      router.push({
        path: '/profile/shadow',
        query: {
          name: 'shadow',
          age: 2
        }
      })
    }

    return { user, changeView }
  }
}
</script>

<style>
.router {
  padding: 0 20px;
}

.active {
  color: tomato;
}
</style>
