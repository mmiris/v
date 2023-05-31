import useMapper from "./useMapper";
import { mapGetters } from "vuex";

export default function useMapGetters(mapper) {
  return useMapper(mapper, mapGetters)
}

