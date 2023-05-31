import useMapper from "./useMapper";
import { mapState } from "vuex";

export default function useMapState(mapper) {
  return useMapper(mapper, mapState)
}
