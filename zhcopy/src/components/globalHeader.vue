<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <ul v-if="!user.isLoging" class="list-inline mb-0">
            <li class="list-inline-item">
                <router-link to="/login" class="btn btn-outline-light my-2">log in</router-link>
            </li>
            <li class="list-inline-item">
                <router-link to="/login" class="btn btn-outline-light my-2">sign up</router-link>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="`hello ${user.name}`">
                    <dropdown-item><router-link to="/create" class="dropdown-item">create article</router-link></dropdown-item>
                    <dropdownItem disabled ><a href="#" class="dropdown-itme">edit article</a></dropdownItem>
                    <dropdownItem><a href="#" class="dropdown-itme">log out</a></dropdownItem>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import dropdown from './dropDown.vue'
import dropdownItem from './dropDownItem.vue'

export interface userProps {
    isLoging: boolean;
    name?: string;
    id?: number;
}

export default defineComponent({
    name: 'globalHeader',
    components: {
        dropdown,
        dropdownItem
    },
    props: {
        user: {
            type: Object as PropType<userProps>,
            required: true
        }
    },

    setup(props) {
        console.log(props.user.name);
        
        return
    },
})
</script>
