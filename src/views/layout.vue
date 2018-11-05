<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header class='header-bar' style="font-size: 12px">
      <div class="left-logo">BENCMS</div>
      <div class="right-info">
        <span class='header-user'>{{realname}}</span>
        <span class='log-out' @click='logout'> 退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu  @select='handleOpen'>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click='goUser'>用户管理</el-menu-item>
              <el-menu-item index="1-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-submenu.active .el-submenu__title{
  color: #000;
  font-weight: bold;
}
.header-bar{
  display: flex;
  justify-content: space-between;
}
.left-logo{
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-left: 50px;
}
.right-info{
  display: flex;
}

.header-user{
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.log-out{
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
  cursor:pointer;
}
.el-aside {
  color: #333;
}
</style>
<script>
export default {
  data() {
    return {
      realname: '',
    }
  },
  methods: {
    handleOpen(index) {
      if (index == 2) {
        this.$router.push({
          path: '/'
        });
      }
    },
    goUser() {
      location.href= '/v/user'
    },
    logout() {
      location.href = '/logout'
    }
  },
  mounted() {
    this.realname = globalData.realname
  }
};
</script>
