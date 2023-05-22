import { ref, watch } from 'vue'

export default (k, v) => {
  let data = ref(v)
  if (v) {
    localStorage.setItem(k, JSON.stringify(data.value))
  } else {
    data.value = JSON.parse(localStorage.getItem(k))
  }

  watch(
    data,
    (data) => {
      localStorage.setItem(k, JSON.stringify(data))
    },
    { deep: true }
  )

  return data
}
