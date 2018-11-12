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
        sort: 0,
        active: true,
        close: false,
        color: "white",
        height: 634,
        name: "Tech:\nEthics"
      },
      speakers: {
        left: 100,
        top: 90,
        sort: 1,
        active: false,
        color: "orange",
        height: 200,
        name: "Speakers"
      },
      schedule: {
        left: 100,
        top: 90,
        sort: 2,
        active: false,
        color: "green",
        height: 390,
        name: "Schedule"
      },
      venue: {
        left: 100,
        top: 90,
        sort: 3,
        active: false,
        color: "blue",
        height: 390,
        name: "Venue"
      },
      attendees: {
        left: 500,
        top: 200,
        sort: 4,
        active: false,
        color: "purple",
        height: 420,
        name: "Attendees"
      },
      contact: {
        left: 0,
        top: 0,
        sort: 5,
        active: false,
        color: "yellow",
        height: 200,
        name: "Contact"
      },
      tickets: {
        left: 0,
        top: 0,
        sort: 6,
        active: false,
        color: "red",
        height: 200,
        name: "Tickets"
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
          .filter(windowName => state.windows[windowName].active)
          .sort((a, b) => {
            const sortA = state.windows[a].sort;
            const sortB = state.windows[b].sort;
            return sortA > sortB ? 1 : -1;
          })
      ];

      sortedNames.forEach((sortedName, index) => {
        state.windows[sortedName].sort = index;
      });

      Object.keys(state.windows)
        .filter(windowName => state.windows[windowName].active === false)
        .forEach(windowName => {
          state.windows[windowName].sort = -1;
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
    closeWindow({ commit, state }, name) {
      commit("closeWindow", name);

      // Bring the next window to the front
      const nextActiveWindow = Object.keys(state.windows).filter(
        name => state.windows[name].sort === 1
      )[0];
      commit("bringToFront", nextActiveWindow);
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
  },
  getters: {
    frontWindow(state) {
      const windowName = Object.keys(state.windows).filter(
        name => state.windows[name].sort === 0
      )[0];

      return {
        ...state.windows[windowName],
        name: windowName
      };
    }
  }
});
