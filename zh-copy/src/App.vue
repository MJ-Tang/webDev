<template>
    <div class="container">
        <globalHeader :user='currentUser'></globalHeader>
        <!-- <column-list :list='list'></column-list> -->
        <validate-form @form-submit="onFormSumbit">
            <div class="mb-3">
                <label for="form-label">email address</label>
                <validateInput 
                    :rules="emailRules" 
                    v-model='emailVal'
                    placeholder='enter emairl address'
                    type='text'
                    ref="inputRef"
                ></validateInput>
                {{emailVal}}
            </div>
            <div class="mb-3">
                <label for="form-label">pass words</label>
                <validateInput 
                    :rules="passwordRules" 
                    v-model='passwordVal'
                    placeholder='enter emairl address'
                    type='password'
                ></validateInput>
                {{emailVal}}
            </div>
            <template #submit >
                <span class="btn btn-danger">submit</span>
            </template>
        </validate-form>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import columnList, { columnProps } from './components/columnList.vue'
import globalHeader, {userProps} from './components/globalHeader.vue'
import validateInput, { rulesProp } from './components/validateInput.vue'
import validateForm from './components/validateFrom.vue'



const currentUser: userProps = {
    isLoging: true,
    name: 'Michael'
}
const testData: columnProps[] = [
    {
        id: 1,
        title: 'test1',
        description: '这是test专栏，有一段非常有意思的简介，可以更新一下',
        avatar: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
    },
    {
        id: 2,
        title: 'test1',
        description: '这是test专栏，有一段非常有意思的简介，可以更新一下',
        avatar: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
    },
    {
        id: 3,
        title: 'test1',
        description: '这是test专栏，有一段非常有意思的简介，可以更新一下'
        // avatar: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
    },
    {
        id: 4,
        title: 'test1',
        description: '这是test专栏，有一段非常有意思的简介，可以更新一下',
        avatar: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
    }
]

// const emailReg = /

export default defineComponent({
    name: 'App',
    components: {
        // columnList,
        globalHeader,
        validateInput,
        validateForm
    },
    setup () {
        const emailVal = ref('Michale')

        const inputRef = ref<any>()

        const emailRules: rulesProp = [
            {type: 'required', message: 'email address can not be empty'},
            {type: 'email', message: 'please enter the real email address'},
        ]
        const emailRef = reactive({
            val: '',
            error: false,
            message: ''
        })
        const validateEmail = () => {
            if (emailRef.val.trim() === '') {
                emailRef.error = true
                emailRef.message = 'can not be empty'
            }
        }

        const onFormSumbit = (result:boolean) => {
            console.log('result',inputRef.value.validateInput());
            
        }
        return {
        list: testData,
        currentUser,
        emailRef,
        validateEmail,
        emailRules,
        emailVal,
        onFormSumbit,
        inputRef
        }
    }
})
</script>

<style>

</style>
