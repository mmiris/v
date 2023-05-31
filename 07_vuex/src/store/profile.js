const profile = {
  namespaced: true,
  state: {
    name: 'shadow',
    age: 2
  },
  getters: {
    doubleAge(state) {
      return state.age * 2
    }
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload.name
    },
    increaseAge(state, payload) {
      state.age += payload.number
    },
    multiplyAge(state, payload) {
      state.age *= payload.number
    }
  },
  actions: {
    multiplyAge({ commit, dispatch, state, rootState, getters, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        commit('multiplyAge', payload)
        resolve(`恭喜你，少奋斗了 ${state.age} 年！`)
      })
    }
  }
}

export default profile
