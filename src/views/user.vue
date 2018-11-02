<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class='operate-block'>
      <el-button type="primary" @click='adduser'>添加用户</el-button>
    </el-row>
    <el-table
    :data="tableData"
    border
    style="width: 900px">
      <el-table-column
        fixed
        prop="createtime"
        label="创建日期"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="realname"
        label="真实姓名"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="角色"
        width="200"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
  </el-table>
  </div>
</template>
<style scoped>
.operate-block{
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      tableData: [{
        createtime: '2018-09-09 12:00:00',
        username: 'daben',
        realname: '大奔',
        rolename: '上帝'
      }],
      baseurl: ''
    }
  },
  methods: {
    adduser() {
      location.href= '/#/useradd'
    }
  },
  mounted() {
  }
}
</script>

