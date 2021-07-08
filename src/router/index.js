//this is crucial js file which helps the user to navigate through multiple pages
//this page create route through which every page can be accessed or navigated
import { createRouter, createWebHistory } from 'vue-router'
import eveHome from '../views/eve/eveHome.vue'
import eveEdit from '../views/eve/eveEdit.vue'
import resHome from '../views/res/resHome.vue'
import resEdit from '../views/res/resEdit.vue'
import ameHome from '../views/ame/ameHome.vue'
import ameEdit from '../views/ame/ameEdit.vue'
import attHome from '../views/att/attHome.vue'
import attEdit from '../views/att/attEdit.vue'
import proHome from '../views/pro/proHome.vue'
import proEdit from '../views/pro/proEdit.vue'
import traHome from '../views/tra/traHome.vue'
import traEdit from '../views/tra/traEdit.vue'
import advHome from '../views/adv/advHome.vue'
import advEdit from '../views/adv/advEdit.vue'
import SignIn from '../views/SignIn.vue'
import firebase from 'firebase'

const routes = [
 
  {
    path: '/:catchAll(.*)',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/1',
    name: 'resHome',
    component: resHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/r',
    redirect: '/1'
  },
  {
    path: '/redit/:id',
    name: 'resEdit',
    component: resEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/2',
    name: 'eveHome',
    component: eveHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/e',
    redirect: '/2'
  },
  {
    path: '/eedit/:id',
    name: 'eveEdit',
    component: eveEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/3',
    name: 'ameHome',
    component: ameHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/a',
    redirect: '/3'
  },
  {
    path: '/aedit/:id',
    name: 'ameEdit',
    component: ameEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/4',
    name: 'attHome',
    component: attHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/at',
    redirect: '/4'
  },
  {
    path: '/atedit/:id',
    name: 'attEdit',
    component: attEdit,
    meta: {
      requiresAuth: true
    }
  },  {
    path: '/5',
    name: 'proHome',
    component: proHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pr',
    redirect: '/5'
  },
  {
    path: '/predit/:id',
    name: 'proEdit',
    component: proEdit,
    meta: {
      requiresAuth: true
    }
  },{
    path: '/6',
    name: 'traHome',
    component: traHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tr',
    redirect: '/6'
  },
  {
    path: '/tredit/:id',
    name: 'traEdit',
    component: traEdit,
    meta: {
      requiresAuth: true
    }
  }
  ,{
    path: '/7',
    name: 'advHome',
    component: advHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ad',
    redirect: '/7'
  },
  {
    path: '/adedit/:id',
    name: 'advEdit',
    component: advEdit,
    meta: {
      requiresAuth: true
    }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//this part of code check whether the sigin user is same as navigating user
//if not , it will redirect to signin and ask user credentials again 
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    console.log("You are not authorized to access this area.");
    next('signin')
  } else if (!requiresAuth && currentUser) {
    console.log("You are authorized to access this area.");
    next('resHome')
  } else {
    next()
  }
})
export default router
