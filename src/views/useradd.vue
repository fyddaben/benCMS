<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/v/user"> 用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>增加用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="user-form">
      <el-form-item label="用户名"  prop="username">
        <el-input v-model="ruleForm.username" :disabled="uid?true: false" ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input type="password"  v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="roleid">
        <el-select v-model="ruleForm.roleid" placeholder="选择角色">
          <el-option v-for="item in roleArr" :label="item.value" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname" >
        <el-input v-model="ruleForm.realname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.container{

}
.user-form{
  margin-top: 20px;
  width: 600px;
  text-align: left;
}
</style>
<script>
const axios = require('axios');
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!this.uid) {
        axios.get('/api/queryuser?username=' + value)
        .then(function (response) {
          let data = response.data
          if (data.result.length > 0) {
            callback(new Error('用户名重复'))
          } else {
            callback()
          }
        })
      } else {
        callback()
      }
    }
    return {
      hasSub: false,
      //用户id
      uid: '',
      roleArr: [{
        _id: 1,
        value: '管理员'
      }, {
        _id: 2,
        value: '家长'
      }, {
        _id: 3,
        value: '学生'
      }],
      ruleForm: {
        // 编辑的时候，无法修改
        username: '',
        password: '',
        roleid: '',
        realname: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { required: true, validator: validateUsername, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        roleid: [
          { required: true, message: '请选择角色', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!that.hasSub) {
            // 避免多次提交
            that.hasSub = true
            // 判断是新增还是编辑
            if (that.uid) {
              axios.post('/api/updateuser', that.ruleForm)
              .then(function (response) {
                location.href = '/v/user'
              })
            } else {
              axios.post('/api/adduser', that.ruleForm)
              .then(function (response) {
                location.href = '/v/user'
              })
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    var _id = this.$route.query.uid
    let that = this
    if (_id) {
      this.uid = _id
      axios.get('/api/queryuser?id=' + _id)
      .then(function (response) {
        let data = response.data
        that.ruleForm = data.result[0]
        delete that.ruleForm.createtime
        delete that.ruleForm.updatetime
      })
    }
  }
}
</script>


