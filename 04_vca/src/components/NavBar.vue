<template>
  <div class="nav">
    <template v-for="(nav, index) in navigations" key="nav">
      <div v-on:click="activate(nav, index)" v-bind:class="{ active: index === currentIndex }">
        <span>{{ nav }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['navigations'],
  emits: ['switchTab'],
  setup(props, { emit }) {
    let currentIndex = ref(0)
    const activate = (nav, index) => {
      currentIndex.value = index
      emit('switchTab', nav)
    }

    return {
      currentIndex,
      activate
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
}

span {
  display: inline-block;
  padding: 2px 5px;
  font-weight: 700;
  cursor: pointer;
}

.active {
  border-bottom: 2px solid skyblue;
}
</style>
