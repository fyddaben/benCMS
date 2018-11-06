<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class='operate-block'>
      <el-button type="primary" @click='addrole'>添加角色</el-button>
    </el-row>
    <el-table
    :data="tableData"
    border
    style="width: 500px">
      <el-table-column
        fixed
        prop="createtime"
        label="创建日期"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="角色名"
        width="200"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="editUser(scope.row.id)" type="text" size="small">编辑</el-button>
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
        createtime: '2018-08-08 12:00:00',
        rolename: 'daben',
      }],
      baseurl: ''
    }
  },
  methods: {
    addrole() {
      location.href = '/v/roleadd'
    }
  }
}
</script>
