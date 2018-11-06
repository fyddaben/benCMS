<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/v/user"> 角色管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>增加角色</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="user-form">
      <el-form-item label="角色名"  prop="username"> <el-input v-model="ruleForm.username" :disabled="uid?true: false" ></el-input>
      </el-form-item>
      <el-form-item label="权限列表"  prop="powerlist">
        <el-transfer  :titles="['权限列表', '选择结果']" v-model="ruleForm.powerlist" :data="allpower"></el-transfer>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.user-form{
  margin-top: 20px;
  width: 600px;
  text-align: left;
}
</style>
<script>
const axios = require('axios');
import RouterList from '../router/main';
export default {
  data() {
    var validatePowerlist = function(rule, value, callback) {
      console.log(value, 'value')
    }
    return {
      uid: '',
      ruleForm: {
        username: '',
        powerlist: [],
      },
      allpower: [],
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        powerlist: [
          { required: true, validator: validatePowerlist, trigger: 'blur' },
        ]
      }
    }
  },
  mounted() {
    console.log('okkk', RouterList[0].children)
    var allpower = []
    RouterList[0].children.map((val)=> {
      allpower.push({
        key: '/v/' + val.path,
        label: val.path
      })
    })
    this.allpower = allpower
  }
}
</script>
