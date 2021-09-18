
<template>
    <div class="row">
        <div v-for="i in columnList" :key="i.id" class="col-4 mb-4">
            <div class="card h-100 shandow-sm">
                <div class="card-body text-center">
                    <img :src="i.avatar" :alt="i.title" class="rounded-circle border-light w-25 my-3">    
                    <h5 class="card-title">{{i.title}}</h5>
                    <p class="card-text text-left">{{i.description}}</p>
                    <h2>{{ i.id }}</h2>
                    <router-link 
                        :to="`/cd/${i.id}`" 
                        class="btn btn-outline-primary"
                    >进入专栏</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface columnProps {
    id:number;
    title:string;
    avatar?:string;
    description:string;
}

export default defineComponent({
    name: 'columnList',
    props: {
        list: {
        type: Array as PropType<columnProps[]>,
        required: true,
        }
    },
    setup (props) {
        const columnList = computed(() => {
            return props.list.map( column => {
                if (!column.avatar) {
                    column.avatar = require('@/assets/logo.png')
                }
                return column
            })
        }) 
        return {
            columnList
        }
    }
})
</script>
