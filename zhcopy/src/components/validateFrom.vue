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
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type validateFunc = () => boolean
type Events = {
    'form-item-created': validateFunc
}

export const emitter = mitt<Events>()

export default defineComponent({
    emits: ['form-submit'],

    setup(props, context) {
        let funArr: validateFunc[] = []

        const submitForm = () => {
            const result = funArr.map(func => func()).every(result => result)
            context.emit('form-submit', result)
        }

        const callback = (func: validateFunc) => {
            funArr.push(func)
        }
        

        emitter.on('form-item-created', callback)

        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            funArr = []
        })

        return{
            submitForm
        }
    },

})
</script>
