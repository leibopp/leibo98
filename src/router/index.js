import Vue from 'vue'
import Router from 'vue-router'
import parent from '../pages/parent'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/HelloWorld',
    }, {
      path: '/HelloWorld',
      name: 'parent',
      component: parent
    }
  ]
})
