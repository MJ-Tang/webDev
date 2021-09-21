<template>
    <div class="create-post-page">
        <h4>新建文章</h4>
        <validate-form @form-submit="onFormSubmit">
        <div class="mb-3">
            <label class="form-label">文章标题：</label>
            <validate-input
            :rules="titleRules" v-model="titleVal"
            placeholder="请输入文章标题"
            type="text"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">文章详情：</label>
            <validate-input
            rows='10'
            type="text"
            tag="textarea"
            placeholder="请输入文章详情"
            :rules="contentRules"
            v-model="contentVal"
            />
        </div>
        <template #submit>
            <button class="btn btn-primary btn-large">创建</button>
        </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { goldalDataProps, PostProps } from '../store'
import validateInput, { rulesProp } from '../components/validateInput.vue'
import validateForm from '../components/validateFrom.vue'


export default defineComponent({
    name: 'Login',
    components: {
        validateInput,
        validateForm    
    },
    setup() {
        const router = useRouter()
        const store = useStore<goldalDataProps>()

        const titleVal = ref('')
        const titleRules: rulesProp = [{
            type: 'required',
            message: 'article title can not be empty'
        }]

        const contentVal = ref('')
        const contentRules: rulesProp = [{
            type: 'required',
            message: 'article detail can not be empty'
        }]

        const onFormSubmit = (result: boolean) => {
            if (result) {
                const { columnId } = store.state.user
                if (columnId){
                    const newPost: PostProps = {
                        id: new Date().getTime(),
                        title: titleVal.value,
                        content: contentVal.value,
                        columnId,
                        createdAt: new Date().toLocaleString(),
                    }

                    store.commit('createPost', newPost)
                    router.push({
                        name: 'cd',
                        params: {id:columnId}
                    })
                }
            }
        }

        return {
        titleRules,
        titleVal,
        contentVal,
        contentRules,
        onFormSubmit
        }

    },
})
</script>
