import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isActive: false,
  },
  mutations: {
    SHOW_NOTIFICATION(state) {
      /* eslint no-param-reassign: "error" */
      state.isActive = true;
    },
    HIDE_NOTIFICATION(state) {
      /* eslint no-param-reassign: "error" */
      state.isActive = false;
    },
  },
  actions: {
    messageHandler({ commit }) {
      commit('SHOW_NOTIFICATION');
      setTimeout(() => {
        commit('HIDE_NOTIFICATION');
      }, 1500);
    },
  },
});
