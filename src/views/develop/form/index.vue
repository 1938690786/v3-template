<script lang='ts' setup>
/**
 * x-form 组件示例页面
 * 演示全部 12 种字段类型、表单验证、提交/重置功能
 */
import { ElMessage } from 'element-plus'
import { formHelper } from '@/utils/helper/form'

/** 角色选项 */
const roleOptions: Option[] = [
    { label: '运营', value: 1 },
    { label: '管理员', value: 2 },
    { label: '超级管理员', value: 3 },
]

/** 性别选项 */
const genderOptions: Option[] = [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
]

/** 爱好选项 */
const hobbyOptions: Option[] = [
    { label: '阅读', value: 'reading' },
    { label: '运动', value: 'sports' },
    { label: '音乐', value: 'music' },
    { label: '编程', value: 'coding' },
]

/** 部门级联选项 */
const departmentOptions = [
    {
        label: '技术部',
        value: 'tech',
        children: [
            { label: '前端组', value: 'frontend' },
            { label: '后端组', value: 'backend' },
        ],
    },
    {
        label: '产品部',
        value: 'product',
        children: [
            { label: '产品设计', value: 'design' },
            { label: '产品运营', value: 'operation' },
        ],
    },
]

const formRef = ref()

const formData = ref<Record<string, any>>({
    hobbies: [],
    enabled: false,
})

/** 字段配置：演示全部 12 种字段类型 */
const fields = computed(() => [
    formHelper.input('用户名', 'username', true, undefined, [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
    ]),
    formHelper.textarea('备注', 'remark'),
    formHelper.select('角色', 'role', roleOptions, true, undefined, { required: true, message: '请选择角色', trigger: 'change' }),
    formHelper.radio('性别', 'gender', genderOptions),
    formHelper.checkbox('爱好', 'hobbies', hobbyOptions),
    formHelper.switch('启用', 'enabled'),
    formHelper.number('年龄', 'age', true, undefined, { required: true, message: '请输入年龄', trigger: 'blur' }),
    formHelper.date('生日', 'birthday'),
    formHelper.dateRange('注册时间', 'createTime'),
    formHelper.datetimeRange('操作时间', 'operateTime'),
    formHelper.cascader('部门', 'department', departmentOptions),
    formHelper.slot('自定义', 'custom'),
])

/** 提交 */
function handleSubmit(data: Record<string, any>) {
    ElMessage.success(`提交成功：${JSON.stringify(data)}`)
}

/** 重置 */
function handleReset() {
    ElMessage.info('表单已重置')
}
</script>

<template>
    <XContent>
        <XForm
            ref="formRef"
            v-model="formData"
            :fields="fields"
            @submit="handleSubmit"
            @reset="handleReset"
        >
            <!-- 自定义插槽：带前缀的输入框 -->
            <template #custom>
                <el-input v-model="formData.custom" placeholder="自定义插槽内容">
                    <template #prepend>
                        https://
                    </template>
                </el-input>
            </template>

            <!-- 底部操作按钮 -->
            <template #formFooter>
                <el-button type="primary" @click="formRef.submit()">
                    提交
                </el-button>
                <el-button @click="formRef.reset()">
                    重置
                </el-button>
            </template>
        </XForm>
    </XContent>
</template>
