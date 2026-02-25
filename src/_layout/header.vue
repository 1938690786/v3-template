<script lang='ts' setup>
import type { FormInstance, FormRules } from 'element-plus'
import { removeToken } from '@/utils/storage'
import { ElMessage, ElMessageBox } from 'element-plus'

const router = useRouter()

// 修改密码弹窗
const passwordVisible = ref(false)
const passwordFormRef = ref<FormInstance>()
const passwordForm = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
})

const passwordRules = computed<FormRules>(() => ({
    oldPassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
    newPassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
    ],
    confirmPassword: [
        { required: true, message: '请确认新密码', trigger: 'blur' },
        {
            validator: (_rule: any, value: string, callback: any) => {
                if (value !== passwordForm.newPassword)
                    callback(new Error('两次输入的密码不一致'))
                else
                    callback()
            },
            trigger: 'blur',
        },
    ],
}))

function openPasswordDialog() {
    passwordVisible.value = true
}

function closePasswordDialog() {
    passwordVisible.value = false
    passwordFormRef.value?.resetFields()
}

function submitPassword() {
    passwordFormRef.value?.validate((valid) => {
        if (!valid)
            return
        // TODO: 调用修改密码接口
        ElMessage.success('密码修改成功，请重新登录')
        closePasswordDialog()
        removeToken()
        router.replace('/login')
    })
}

function handleLogout() {
    ElMessageBox.confirm('确定退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(() => {
        removeToken()
        router.replace('/login')
    }).catch(() => {})
}
</script>

<template>
    <div class="header">
        <div class="left">
            <el-icon size="30">
                <ElementPlus />
            </el-icon>
        </div>
        <div class="right">
            <el-dropdown trigger="click">
                <div class="avatar-wrapper">
                    <el-icon><User /></el-icon>
                    <span class="username">Admin</span>
                    <el-icon class="ml-4px">
                        <ArrowDown />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="openPasswordDialog">
                            <el-icon><Lock /></el-icon>
                            修改密码
                        </el-dropdown-item>
                        <el-dropdown-item divided @click="handleLogout">
                            <el-icon><SwitchButton /></el-icon>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <!-- 修改密码弹窗 -->
    <el-dialog v-model="passwordVisible" title="修改密码" width="420px" :close-on-click-modal="false" @close="closePasswordDialog">
        <el-form ref="passwordFormRef" :model="passwordForm" :rules="passwordRules" label-width="80px">
            <el-form-item label="原密码" prop="oldPassword">
                <el-input v-model="passwordForm.oldPassword" type="password" show-password placeholder="请输入原密码" />
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="passwordForm.newPassword" type="password" show-password placeholder="请输入新密码" />
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="passwordForm.confirmPassword" type="password" show-password placeholder="请再次输入新密码" />
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="closePasswordDialog">取 消</el-button>
            <el-button type="primary" @click="submitPassword">确 定</el-button>
        </template>
    </el-dialog>
</template>

<style scoped lang='scss'>
.header {
    transition: all 0.2s;
    z-index: 999;
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #001529;
    box-shadow: 0 2px 8px #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        color: #fff;
        padding-left: 20px;
        display: flex;
        align-items: center;
    }
    .right {
        padding-right: 20px;
        display: flex;
        align-items: center;

        .avatar-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #fff;
            gap: 8px;

            .username {
                font-size: 14px;
            }
        }
    }
}
</style>
