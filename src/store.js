import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNotificationActive: false
  },
  mutations: {
    DISPLAY_NOTIFICATION(state) {
      state.isNotificationActive = true;
    },
    HIDE_NOTIFICATION(state) {
      state.isNotificationActive = false;
    }
  },
  actions: {
    displayNotification({ commit }) {
      commit("DISPLAY_NOTIFICATION");
      setTimeout(() => {
        commit("HIDE_NOTIFICATION");
      }, 2250);
    }
  }
});
