import Vue from 'vue'
import Router from 'vue-router'
import ListarRegistros from '../views/ListarRegistros.vue'
import CrearRegistro from '../views/CrearRegistro.vue'
import VerRegistro from '../views/VerRegistro.vue'
import EditarRegistro from '../views/EditarRegistro.vue'
import EliminarRegistro from '../views/EliminarRegistro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'listado',
      component: ListarRegistros
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearRegistro
    },
    {
      path: '/ver/:id',
      name: 'ver',
      component: VerRegistro
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarRegistro
    },
    {
      path: '/eliminar/:id',
      name: 'eliminar',
      component: EliminarRegistro
    },
  ]
})
