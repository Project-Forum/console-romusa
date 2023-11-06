<!-- Authentication.vue -->

<template>
  <div>
    <!-- Show the main content if the user is authenticated -->
    <div v-if="isAuthenticated">
      <!-- Your main content here -->
    </div>

    <!-- Show the login form if the user is not authenticated -->
    <div v-else>
      <!-- Your login form or component here -->
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    isAuthenticated() {
      return store.state.user !== null;
    },
  },
};
</script>
