<template>
  <div class="tab">
    <div v-for="(item, index) in titles" v-on:click="switchTab(index)">
      <span :class="{ active: currentIndex == index }">{{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    switchTab: (index) => {
      if (index == 2) {
        console.log('shadow, welcome!')
      }
      return true
    }
  },
  props: {
    titles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    switchTab(index) {
      this.currentIndex = index
      this.$emit('switchTab', index)
    }
  }
}
</script>

<style>
.tab {
  display: flex;
}

.tab div {
  flex: 1;
  text-align: center;
  cursor: pointer;
}

span {
  padding: 3px 10px;
  font-weight: 700;
  font-size: 18px;
}

.active {
  color: skyblue;
  border-bottom: 2px skyblue solid;
}
</style>
