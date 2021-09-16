<template>
    <div class="container">
        <globalHeader :user='currentUser'></globalHeader>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import globalHeader, {userProps} from './components/globalHeader.vue'





const currentUser: userProps = {
    isLoging: true,
    name: 'Michael'
}


export default defineComponent({
    name: 'App',
    components: {
        // columnList,
        globalHeader,
    },
    setup () {
        return {
        currentUser,
        }
    }
})
</script>

<style>

</style>
