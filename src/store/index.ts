import { createStore } from "vuex";

export default createStore({
  state: {
    contentWrapperRef: "",
    getAllData: false,
  },
  mutations: {
    resetTableAction(state, value) {
      state.contentWrapperRef = value;
    },
    GET_ALL_DATA(state, value) {
      state.getAllData = value;
    },
  },
  actions: {
    resetTableAction({ commit }, value) {
      commit("resetTableAction", value);
    },
    ["setAllData"]({ commit }, value) {
      commit("GET_ALL_DATA", value);
    },
  },
  getters: {
    getAllData: (state) => {
      return state.getAllData;
    }
  },
  modules: {},
});
