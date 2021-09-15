<template>
    <form class="validate-form-container">
        <slot name='default'></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="sumbit" class="btn btn-primary">submit</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['form-submit'],

    setup(props, context) {
        const submitForm = () => {
            context.emit('form-submit', true)
        }
        return{
            submitForm
        }
    },

})
</script>
