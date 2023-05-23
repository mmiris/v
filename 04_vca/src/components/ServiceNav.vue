<template>
  <div class="nav">
    <template v-for="(nav, index) in navs" key="nav">
      <div v-bind:class="{ active: index === currentIndex }" v-on:click="switchTab(index)">
        {{ nav }}
      </div>
    </template>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  emits: ['switchTab'],
  setup(_, { emit }) {
    const navs = inject('navs')
    const currentIndex = ref(0)

    const switchTab = (index) => {
      currentIndex.value = index
      emit('switchTab', index)
    }

    return {
      navs,
      currentIndex,
      switchTab
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
}

.nav div {
  padding: 2px 5px;
  cursor: pointer;
}

.active {
  border-bottom: 3px solid skyblue;
}
</style>
