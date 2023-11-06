// store/auth.js

const state = {
    user: null,
    token: null,
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUser(state) {
      state.user = null;
    },
    clearToken(state) {
      state.token = null;
    },
  };
  
  const actions = {
    login({ commit }, userData) {
      // Make an API request to authenticate the user and obtain a token
      // Use the provided URL and response structure
      // You can use Axios or any HTTP library to make the request
  
      // Example using Axios
      axios.post('http://localhost:8000/api/login', userData).then((response) => {
        const { user, token } = response.data;
        commit('setUser', user);
        commit('setToken', token);
      });
    },
    logout({ commit }) {
      // Clear the user and token
      commit('clearUser');
      commit('clearToken');
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  