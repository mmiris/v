import useMapper from "./useMapper";
import { mapState, createNamespacedHelpers } from "vuex";

export default function useMapState(mapper, namespace) {
  if (typeof namespace === 'string' && namespace.length > 0) {
    return useMapper(mapper, createNamespacedHelpers(namespace).mapState)
  } else {
    return useMapper(mapper, mapState)
  }
}
