const Index = () => import('@/views/index.vue')
const Layout = () => import('@/views/layout.vue')
const User = () => import('@/views/user.vue')
const UserAdd = () => import('@/views/useradd.vue')
const Role = () => import('@/views/role.vue')
const RoleAdd = () => import('@/views/roleadd.vue')
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
      }, {
        name: 'role',
        path: 'role',
        component: Role
      }, {
        name: 'roleadd',
        path: 'roleadd',
        component: RoleAdd
      }
    ]
  }
]
export default mainObj
