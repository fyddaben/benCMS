<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/v/user"> 角色管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>增加角色</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="user-form">
      <el-form-item label="角色名"  prop="rolename">
        <el-input v-model="ruleForm.rolename" :disabled="uid?true: false" ></el-input>
      </el-form-item>
      <el-form-item label="权限列表"  prop="powerlist">
        <el-transfer  :titles="['权限列表', '选择结果']" v-model="ruleForm.powerlist" :data="allpower"></el-transfer>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
      if (!value.length) {
        callback(new Error('请选择权限'))
      }else {
        callback()
      }
    }
    return {
      rid: '',
      hasSub: false,
      ruleForm: {
        rolename: '',
        powerlist: [],
      },
      allpower: [],
      rules: {
        rolename: [
          { required: true, message: '请输入角色名', trigger: 'blur' },
        ],
        powerlist: [
          { required: true, validator: validatePowerlist, trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!that.hasSub) {
            that.hasSub = true
            if (that.uid) {
              axios.post('/api/updaterole', {
                rolename: that.ruleForm.rolename,
                powerlist: JSON.stringify(that.ruleForm.powerlist)
              }).then(function (response) {
                location.href = '/v/role'
              })
            }else{
              axios.post('/api/addrole', {
                rolename: that.ruleForm.rolename,
                powerlist: JSON.stringify(that.ruleForm.powerlist)
              }).then(function (response) {
                location.href = '/v/role'
              })
            }
          }
        } else {
          console.log('submit error')
        }
      })
    }
  },
  mounted() {
    var allpower = []
    RouterList[0].children.map((val)=> {
      allpower.push({
        key: '/v/' + val.path,
        label: val.path
      })
    })
    this.allpower = allpower
    let that = this
    var _id = this.$route.query.rid
    if (_id) {
      this.rid = _id
      axios.get('/api/queryrole?id=' + _id)
      .then(function (response) {
        let data = response.data
        let obj = data.result[0]
        that.ruleForm.rolename = obj.rolename
        that.ruleForm.powerlist = JSON.parse(obj.powerlist)
      })
    }
  }
}
</script>
