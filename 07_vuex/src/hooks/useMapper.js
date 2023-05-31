import { computed } from 'vue'
import { useStore } from 'vuex'

export default function (mapper, mapFn) {
  const storeMapFns = mapFn(mapper)
  const store = useStore()
  let storeMaps = {}

  for (const fnKey in storeMapFns) {
    storeMaps[fnKey] = computed(storeMapFns[fnKey].bind({ $store: store }))
  }

  return storeMaps
}
