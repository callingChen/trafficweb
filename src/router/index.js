import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import LoginForm from '@/components/LoginForm'
import index from '../page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'traffic',
      component: App,
      children: [
        {
          path: '/login',
          component: LoginForm
        },
        {
          path: '/index',
          component: index
        }
      ]
    }
  ]
})
