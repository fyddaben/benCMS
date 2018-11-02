<template>
  <div>
    Hello ，这是首页
  </div>
</template>
<style scoped>
.tool-bar{
  text-align: left;
}
.nov-table{
  margin-top: 20px;
  width: 100%;
}
.form-img{
  width: 100px;
  height: 100px;
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
  },
  mounted() {
  }
}
</script>

