<script lang='ts' setup>
import type { FormInstance, FormRules } from 'element-plus'
import { setToken } from '@/utils/storage'

const router = useRouter()

const formRef = ref<FormInstance>()
const form = reactive({
    username: '',
    password: '',
})
const loading = ref(false)

const rules: FormRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

function handleLogin() {
    formRef.value?.validate((valid) => {
        if (!valid)
            return
        loading.value = true
        setTimeout(() => {
            setToken(`token_${Date.now()}`)
            loading.value = false
            router.replace('/')
        }, 300)
    })
}
</script>

<template>
    <div class="login-container">
        <el-card class="login-card" shadow="always">
            <template #header>
                <div class="card-header">
                    <el-icon size="28">
                        <ElementPlus />
                    </el-icon>
                    <span class="title">系统登录</span>
                </div>
            </template>
            <el-form ref="formRef" :model="form" :rules="rules" size="large" @keyup.enter="handleLogin">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">
                        登 录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped lang='scss'>
.login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    .login-card {
        width: 420px;

        .card-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            .title {
                font-size: 20px;
                font-weight: 600;
            }
        }

        .login-btn {
            width: 100%;
        }
    }
}
</style>
