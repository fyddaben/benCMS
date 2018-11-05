const Index = () => import('@/views/index.vue')
const Layout = () => import('@/views/layout.vue')
const User = () => import('@/views/user.vue')
const UserAdd = () => import('@/views/useradd.vue')
const mainObj = [
  {
    name: 'entrance',
    path: '/v',
    redirect: { name: 'home' },
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Index
      }, {
        name: 'user',
        path: 'user',
        component: User
      }, {
        name: 'useradd',
        path: 'useradd',
        component: UserAdd
      }, {
        name: 'useredit',
        path: 'useredit',
        component: UserAdd
      }
    ]
  }
]
export default mainObj
