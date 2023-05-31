const about = {
  namespaced: true,
  state: {
    aboutAge: 1218
  },
  getters: {
    doubleAge(state) {
      return state.aboutAge * 2
    }
  },
  mutations: {
    incrementAge(state, payload) {
      state.aboutAge += payload.number
    },
    multiplyAge(state, payload) {
      state.aboutAge *= payload.number
    }
  },
  actions: {
    multiplyAge({ commit, dispatch, state, rootState, getters, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        commit('multiplyAge', payload)
        resolve(`恭喜你，少奋斗了 ${state.aboutAge} 年！`)
      })
    }
  }
}

export default about
