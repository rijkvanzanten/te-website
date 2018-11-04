import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    windows: {
      about: {
        left: 50,
        top: 50,
        sort: 1,
        active: true
      },
      contact: {
        left: 100,
        top: 90,
        sort: 2,
        active: true
      },
      schedule: {
        left: 500,
        top: 200,
        sort: 3,
        active: true
      }
    }
  },
  mutations: {
    closeWindow(state, name) {
      state.windows[name].active = false;
    },
    setLastPosition(state, { page, left, top }) {
      state.windows[page].left = left;
      state.windows[page].top = top;
    },
    bringToFront(state, name) {
      // Increment each sort value by 1. Set the provided name to be 1
      Object.keys(state.windows).forEach(windowName => {
        state.windows[windowName].sort = state.windows[windowName].sort + 1;
      });

      state.windows[name].sort = 1;
    }
  },
  actions: {
    closeWindow({ commit }, name) {
      commit("closeWindow", name);
    },
    setLastPosition({ commit }, info) {
      commit("setLastPosition", info);
    },
    bringToFront({ commit }, name) {
      commit("bringToFront", name);
    }
  }
});
