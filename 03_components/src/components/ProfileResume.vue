<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ email }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ProfileResume',
  data() {
    return {
      name: 'shadow',
      email: 'mmiris@mmiris.dev'
    }
  },
  activated() {
    console.log('I came back.')
  },
  deactivated() {
    console.log('Bye ~')
  }
}
</script>
