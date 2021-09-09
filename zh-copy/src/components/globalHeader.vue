<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a href="#" class="navbar-brand">Navbar</a>
        <ul v-if="!user.isLoging" class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">log in</a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">sign up</a>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="`hello ${user.name}`">
                    <dropdownItem><a href="#" class="dropdown-itme">create article</a></dropdownItem>
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

    setup() {
        return
    },
})
</script>
