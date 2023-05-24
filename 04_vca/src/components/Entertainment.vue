<template>
  <div>
    <h2>Entertainment</h2>
    <input type="text" ref="inputRef" placeholder="Enter somthing..." v-focus />
    <h3 v-ftime="'HH:mm:ss'">1684916227</h3>
    <entertainment-club></entertainment-club>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EntertainmentClub from './EntertainmentClub.vue'

export default {
  setup() {
    let inputRef = ref(null)
    // onMounted(() => {
    //   inputRef.value.focus()
    // })
    return {
      inputRef
    }
  },
  // ,
  // directives: {
  //   focus: {
  //     mounted(el) {
  //       el.focus()
  //     }
  //   }
  // }
  components: { EntertainmentClub }
}
</script>
