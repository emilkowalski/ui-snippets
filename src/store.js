import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let nextId = 1;

export default new Vuex.Store({
  state: {
    notifications: []
  },

  actions: {
    addNotification({ commit }) {
      commit("pushNotification");
    },
    removeNotification({ commit }, notificationToRemove) {
      commit("deleteNotification", notificationToRemove);
    }
  },

  mutations: {
    pushNotification(state) {
      state.notifications.push({
        id: nextId++
      });
    },
    deleteNotification(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        notification => notification.id !== notificationToRemove.id
      );
    }
  }
});
