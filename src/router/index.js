import Vue from 'vue'
import Router from 'vue-router'
import Main  from './main'

Vue.use(Router)

const router = new Router({
  routes: [...Main]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  next();
})


export default router


