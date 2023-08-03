import { defineStore } from 'pinia'
const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterAction(counter: number) {
      this.counter = counter
    }
  }
})

export default useCounterStore