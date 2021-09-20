<template>
    <div class="container">
        <globalHeader :user='currentUser'></globalHeader>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import globalHeader, {userProps} from './components/globalHeader.vue'








export default defineComponent({
    name: 'App',
    components: {
        // columnList,
        globalHeader,
    },
    setup () {
        const store = useStore()
        const currentUser = computed(() => store.state.user)
        return {
        currentUser,
        }
    }
})
</script>

<style>

</style>
