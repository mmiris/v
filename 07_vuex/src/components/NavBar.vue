<template>
  <div class="nav">
    <template v-for="(nav, index) in navigations" key="nav">
      <div v-on:click="switchNav(index)" :class="{ active: currentIndex === index }">
        <span>{{ nav }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    navigations: {
      type: Array,
      default() {
        return ['null', 'null']
      }
    }
  },
  emits: ['switchNav'],
  setup(_, {emit}) {
    const currentIndex = ref(0)
    const switchNav = (index) => {
      currentIndex.value = index
      emit('switchNav', index)
    }
    return {
      currentIndex,
      switchNav
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
}

.nav div {
  padding: 2px 8px;
  font-weight: 700;
  cursor: pointer;
}

.active {
  border-bottom: 2px solid skyblue;
}
</style>
