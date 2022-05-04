import { createStore } from "vuex";

export default createStore({
  state: {
    deletedItem: 0
  },
  mutations: {
    getDeletedItem(state, value) {
      state.deletedItem = value;
    },
  },
  actions: {
    getDeletedItem({ commit }, value) {
      commit("getDeletedItem", value);
    },
  },
  getters: {
    getDeletedData: (state) => {
      return state.deletedItem;
    },
  },
  modules: {},
});
