import { createStore } from 'vuex'
import { INCREMENT_AGE, DECREMENT_AGE } from './mutationsTypes'

const store = createStore({
  state: {
    rootName: 'shadow',
    age: 2,
    addr: "Heaven's side",
    grade: { english: 98, vue: 100, JavaScript: 101, Python: 99 }
  },
  getters: {
    totalScores(state) {
      let totalGrade = 0
      for (const subject in state.grade) {
        totalGrade += state.grade[subject]
      }
      return totalGrade
    },
    realTotalScores(state, getters) {
      return getters.totalScores - 1
    },
    totalMoreNScores(state) {
      return (n) => {
        let totalGrade = 0
        for (const subject in state.grade) {
          if (state.grade[subject] < n) continue
          totalGrade += state.grade[subject]
        }
        return totalGrade
      }
    }
  },
  mutations: {
    [INCREMENT_AGE]: (state, payload) => {
      state.age += payload.number
    },
    [DECREMENT_AGE]: (state, payload) => {
      state.age -= payload.number
    }
  }
})

export default store
