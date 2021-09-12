
<template>
    <div class="row">
        <div v-for="i in list" :key="i.id" class="col-4">
            <img :src="i.avatar" :alt="i.title">
            <h5>{{i.title}}</h5>
            <p>{{i.description}}</p>
            <a href="#">进入专栏</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface columnProps {
    id:number;
    title:string;
    avatar:string;
    description:string;
}

export default defineComponent({
  name: 'columnList',
  props: {
    list: {
      type: Array as PropType<columnProps[]>,
      required: true
    }
  },
  setup () {

  }
})
</script>
