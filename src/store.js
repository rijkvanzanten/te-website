import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    activeWindows: ["about", "contact", "schedule"],
    positions: {
      about: {
        left: 50,
        top: 50
      },
      contact: {
        left: 100,
        top: 90
      },
      schedule: {
        left: 500,
        top: 200
      }
    }
  },
  mutations: {
    closeWindow(state, name) {
      state.activeWindows = state.activeWindows.filter(
        activeName => activeName !== name
      );
    },
    setLastPosition(state, { page, left, top }) {
      state.positions[page].left = left;
      state.positions[page].top = top;
    }
  },
  actions: {
    closeWindow({ commit }, name) {
      commit("closeWindow", name);
    },
    setLastPosition({ commit }, info) {
      commit("setLastPosition", info);
    }
  }
});
