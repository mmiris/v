<template>
  <hr />
  <h3>{{ readonlyInfo.name }}</h3>
  <button v-on:click="assignReadonlyInfo">AssignReadonlyInfo</button>
</template>

<script>
export default {
  props: {
    readonlyInfo: {
      require: true
      // default() {
      //   return { name: 'naive', age: 99 }
      // },
    }
  },
  // 'readonlyInfo'
  setup(props) {
    const assignReadonlyInfo = () => {
      props.readonlyInfo.name = 'naive'
    }

    return {
      assignReadonlyInfo
    }
  }
}
</script>
