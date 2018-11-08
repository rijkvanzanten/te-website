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
      speakers: {
        left: 100,
        top: 90,
        sort: 2,
        active: false
      },
      schedule: {
        left: 100,
        top: 90,
        sort: 2,
        active: false
      },
      venue: {
        left: 100,
        top: 90,
        sort: 2,
        active: true
      },
      attendees: {
        left: 500,
        top: 200,
        sort: 3,
        active: true
      },
      contact: {
        left: 0,
        top: 0,
        sort: 5,
        active: false
      },
      tickets: {
        left: 0,
        top: 0,
        sort: 12,
        active: false
      }
    },
    navigationMenuActive: false
  },
  mutations: {
    openWindow(state, name) {
      state.windows[name].active = true;
    },
    closeWindow(state, name) {
      state.windows[name].active = false;
    },
    setLastPosition(state, { page, left, top }) {
      state.windows[page].left = left;
      state.windows[page].top = top;
    },
    bringToFront(state, name) {
      const sortedNames = [
        name,
        ...Object.keys(state.windows)
          .filter(windowName => windowName !== name)
          .sort((a, b) => {
            const sortA = state.windows[a].sort;
            const sortB = state.windows[b].sort;
            return sortA > sortB ? 1 : -1;
          })
      ];
      sortedNames.forEach((sortedName, index) => {
        state.windows[sortedName].sort = index;
      });
    },
    toggleNavigationMenu(state, active = null) {
      if (active === null) {
        state.navigationMenuActive = !state.navigationMenuActive;
      } else {
        state.navigationMenuActive = active;
      }
    }
  },
  actions: {
    openWindow({ commit }, name) {
      commit("openWindow", name);
      commit("bringToFront", name);
    },
    closeWindow({ commit }, name) {
      commit("closeWindow", name);
    },
    setLastPosition({ commit }, info) {
      commit("setLastPosition", info);
    },
    bringToFront({ commit }, name) {
      commit("bringToFront", name);
    },
    toggleNavigationMenu({ commit }, active) {
      commit("toggleNavigationMenu", active);
    }
  }
});
