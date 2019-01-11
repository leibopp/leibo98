import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '../pages/parent'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/HelloWorld',
      component: HelloWorld
    }, {
      path: '/vuexPro/startVuex',
      name: 'parent',
      component: parent
    }
  ]
})
