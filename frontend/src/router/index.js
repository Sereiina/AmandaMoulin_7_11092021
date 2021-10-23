import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }, {
    path: '/accueil',
    name: 'Accueil',
    
    component: () => import('../views/Accueil.vue'),
    beforeEnter: ((to, from, next) => {
      if (to.name !== 'Login' && !sessionStorage.getItem('token')) {
        next('/login')
      } else {
        next()
      }
      
    })
  }, {
    path: '/forum-text',
    name: 'ForumText',
    component: () => import('../views/ForumText.vue')
  }, {
    path: '/forum-media',
    name: 'ForumMedia',
    component: () => import('../views/ForumMedia.vue')
  }, {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;