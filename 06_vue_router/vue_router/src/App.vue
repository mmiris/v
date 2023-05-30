<template>
  <router-link to="/home" class="router" active-class="active">Home</router-link>
  <router-link :to="'/profile/' + user" class="router" active-class="active">Profile</router-link>
  <router-link to="/login" class="router" active-class="active">Login</router-link>
  <button v-on:click="changeView">Profile</button>
  <h5>{{ $route.fullPath }}</h5>
  <button v-on:click="removeLogin">removeLogin</button>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const user = ref('shadow')
    let router = useRouter()
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

    const removeLogin = () => {
      router.removeRoute('login')
    }

    return { user, changeView, removeLogin }
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
