import store from './store/auth';

export default function (to, from, next) {
    const isAuthenticated = !!store.state.user; /* Check if the user is authenticated */
  
    if (isAuthenticated) {
      next(); // Proceed to the next route
    } else {
      next("/login"); // Redirect to the login page if not authenticated
    }
  }