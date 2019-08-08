import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grupos',
      name: 'grupos',
      component: () => import(/* webpackChunkName: "grupos" */ './views/Grupos.vue')
    },
    {
      path: '/grupo/:id',
      name: 'grupo',
      props:true,
      component: () => import(/* webpackChunkName: "grupo" */ './views/GrupoDetalle.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/asistencia',
      name: 'asistencia',
      component: () => import(/* webpackChunkName: "asistencia" */ './views/Asistencia.vue')
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: () => import(/* webpackChunkName: "actividades" */ './views/Actividades.vue')
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: () => import(/* webpackChunkName: "reportes" */ './views/Reportes.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "tests" */ './views/Tests.vue')
    },

  ]
})
