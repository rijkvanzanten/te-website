import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeWindows: ["about"],
    positions: {
      about: {
        xPos: 0,
        yPos: 0
      }
    }
  },
  mutations: {
    closeWindow(state, name) {
      state.activeWindows = state.activeWindows.filter(
        activeName => activeName !== name
      );
    }
  },
  actions: {
    closeWindow({ commit }, name) {
      commit("closeWindow", name);
    }
  }
});
