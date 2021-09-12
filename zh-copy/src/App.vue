<template>
    <div class="container">
        <globalHeader :user='currentUser'></globalHeader>
        <!-- <column-list :list='list'></column-list> -->
        <form action="">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input 
                    type="email" class='form-control' id="exampleInputEmail1"
                    v-model='emailRef.val'
                    @blur="validateEmail"
                >
                <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">pross words</label>
                <input type="email" class='form-control' id="exampleInputEmail1">
            </div>
            
        </form>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import columnList, { columnProps } from './components/columnList.vue'
import globalHeader, {userProps} from './components/globalHeader.vue'


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
        globalHeader
    },
    setup () {
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
        return {
        list: testData,
        currentUser,
        emailRef,
        validateEmail
        }
    }
})
</script>

<style>

</style>
