<template>
    <div class="container">
        <column-list :list='list'></column-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import columnList, { columnProps } from './components/columnList.vue'

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
  }
]

export default defineComponent({
  name: 'App',
  components: {
    columnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>

</style>
