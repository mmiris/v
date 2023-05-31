import useMapper from './useMapper'
import { mapGetters, createNamespacedHelpers } from 'vuex'

export default function useMapGetters(mapper, namespace) {
  if (typeof namespace === 'string' && namespace.length > 0) {
    return useMapper(mapper, createNamespacedHelpers(namespace).mapGetters)
  } else {
    return useMapper(mapper, mapGetters)
  }
}
