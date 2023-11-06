import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: null, // Initialize user state
  // Other state properties
};

const mutations = {
  setUser(state, user) {
    state.user = user; // Mutation to set user
  },
  // Other mutations
};

// Other Vuex store configurations

export default new Vuex.Store({
  state,
  mutations,
  // Other store configurations
});