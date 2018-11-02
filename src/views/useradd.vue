<template>
  <div class='container'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/#/user"> 用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>增加用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="user-form">
      <el-form-item label="用户名"  prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input type="password"  v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="roleid">
        <el-select v-model="ruleForm.roleid" placeholder="选择角色">
          <el-option label="管理员" value="1"></el-option>
          <el-option label="上帝" value="2"></el-option>
          <el-option label="普通职员" value="3"></el-option>
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
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      callback(new Error('用户名重复'))
    }
    return {
      ruleForm: {
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>


