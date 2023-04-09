<template id="cpn">
  <h1>{{ greeting }}</h1>
</template>

<script>
export default {
  template: '#cpn',
  data() {
    return {
      greeting: 'Hello Vue!'
    }
  }
}
</script>

<style>
h1 {
  color: skyblue;
}
</style>