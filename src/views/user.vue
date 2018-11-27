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
      tableData: [],
      baseurl: ''
    }
  },
  methods: {
    adduser() {
      location.href= '/v/useradd'
    },
    editUser(id) {
      location.href = '/v/useredit?uid='+id
    }
  },
  mounted() {
    let that = this
    axios.get('/api/queryuserdetail')
    .then(function (response) {
      let data = response.data
      that.tableData = data.result
    })
  }
}
</script>

