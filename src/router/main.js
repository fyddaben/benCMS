const Index = () => import('@/views/index.vue')
const Layout = () => import('@/views/layout.vue')
const User = () => import('@/views/user.vue')
const UserAdd = () => import('@/views/useradd.vue')
const Role = () => import('@/views/role.vue')
const Demo = () => import('@/views/demo.vue')
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
        rname: '首页',
        path: 'home',
        // 导航是否显示
        isShowInMenu: false,
        component: Index
      }, {
        name: 'demo',
        rname: 'Demo页面',
        path: 'demo',
        // 导航是否显示
        isShowInMenu: true,
        menuGroup: '普通组',
        component: Demo
      }, {
        name: 'user',
        rname: '用户列表',
        path: 'user',
        // 导航是否显示
        isShowInMenu: true,
        menuGroup: '权限组',
        component: User
      }, {
        name: 'useradd',
        rname: '用户添加',
        path: 'useradd',
        // 导航是否显示
        isShowInMenu: false,
        component: UserAdd
      }, {
        name: 'useredit',
        rname: '用户编辑',
        path: 'useredit',
        // 导航是否显示
        isShowInMenu: false,
        component: UserAdd
      }, {
        name: 'role',
        rname: '角色列表',
        path: 'role',
        // 导航是否显示
        isShowInMenu: true,
        menuGroup: '权限组',
        component: Role
      }, {
        name: 'roleadd',
        rname: '角色增加',
        path: 'roleadd',
        // 导航是否显示
        isShowInMenu: false,
        component: RoleAdd
      }, {
        name: 'roleedit',
        rname: '角色编辑',
        path: 'roleedit',
        // 导航是否显示
        isShowInMenu: false,
        component: RoleAdd
      }
    ]
  }
]
export default mainObj
