<template>
  <div>
    <h1>You are not logged in yet, please log in!</h1>
    <button v-on:click="login">login</button>
    <button v-on:click="logout">logout</button>
  </div>
</template>

<script>
export default {
  setup() {
    const login = () => {
      localStorage.setItem('token', "'Heven's side.")
    }

    const logout = () => {
      localStorage.removeItem('token')
    }

    return { login, logout }
  }
}
</script>
