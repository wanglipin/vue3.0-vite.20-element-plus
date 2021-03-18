<template>
  <div class="login-wrapper">
    <el-form :model="ruleForm" status-icon ref="ruleFormRef" label-width="0px" class="login-ruleForm">
      <el-form-item prop="username">
        <label>用户名</label>
        <el-input  type="text" size="small" prefix-icon="el-icon-user" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <labe>密码</labe>
        <el-input type="password" size="small" prefix-icon="el-icon-lock" suffix-icon="el-icon-view" v-model="ruleForm.pass" autocomplete="off"></el-input>
          <!-- <template #suffix>
            <i class="el-icon-view"></i>
          </template> -->
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" size="small" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {
    // HelloWorld
  },
  setup() {
    const ruleFormRef = ref<string>()
    const data = reactive<any>({
      ruleForm: {
        username: 'wanglipin',
        pass: '123456'
      }
    })
    const onSubmit = () => {
      console.log('用户名：'+ data.ruleForm.username, '密码：'+ data.ruleForm.pass)

    }
    return {
      ruleFormRef,
      ...toRefs(data),
      onSubmit
    }
  }
})
</script>

<style lang="scss">
.login-wrapper {
  background-image: url('@/static/img/bg.jpg');
  background-size: cover;
  color: aliceblue;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .login-ruleForm {
    margin: 0 auto;
    width: 350px;
    height: 204px;

  }
}
</style>
