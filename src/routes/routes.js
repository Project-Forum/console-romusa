//component
import DashboardLayout from '../layout/DashboardLayout.vue'

// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile/List.vue'
import Majors from 'src/pages/Majors/Major.vue'
import Notifications from 'src/pages/Notifications.vue'
import authGuard from 'src/authGuard';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    beforeEnter: authGuard, // Apply the auth guard
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    beforeEnter: authGuard, // Apply the auth guard
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'major',
        name: 'Major',
        component: Majors
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
