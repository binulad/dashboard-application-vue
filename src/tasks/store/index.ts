import { createStore } from "vuex";

export default createStore({
  state: {
    updateTaskOrder: false
  },
  mutations: {
    updateTaskList(state, value) {
      state.updateTaskOrder = value;
    },
  },
  actions: {
    updateTaskList({ commit }, value) {
      commit("updateTaskList", value);
    },
  },
  getters: {
    getTaskList: (state) => {
      return state.updateTaskOrder;
    },
  },
  modules: {},
});