import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
    projects,
    tasks,
  },
  plugins: [
    createPersistedState(),
  ],
});
