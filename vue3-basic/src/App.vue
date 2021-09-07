<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <ul>
        <li v-for='n in number' :key="n">{{n}}</li>
    </ul>
    <h1>{{person.name}}</h1>
    <h1>{{greetings}}</h1>
    <h1>x: {{x}}</h1>
    <h1>y: {{y}}</h1>
    <button @click="openModal">Open Modal</button>
    <Modal :isOpen = 'modalIsOpen' @close-modal = 'onModalClose'>My Model!!</Modal>
    <button @click="increase">+1</button>
    <button @click="updateGreeting">update Title</button>

    <h1 v-if="loading">loading ...</h1>
    <img v-if='loaded' :src="result[0].url" >
</template>

<script lang="ts">

import { ref,computed,reactive, toRefs, onMounted, onUnmounted, onUpdated, onRenderTracked, watch } from 'vue'
import useMounsePositon from './hooks/useMounsePostion'
import useURLLoader from './hooks/useURLLoader'
import Modal from './components/Model.vue';

interface DataProps {
    count: number;
    double: number;
    increase: () => void;
    number: number[];
    person: { name?: string }
}

interface dogReslut {
    message:string;
    status:string;
}

interface catResult{
    id:string;
    url:string;
    width:number;
    height:number;
}

export default ({
    name: 'App',
    components: {
        Modal
    },
    setup() {
        // const count = ref(0)
        // const double = computed(() => {
        //     return count.value*2
        // })
        // const increase = () => {
        //     count.value++
        // }
        const greetings = ref('')
        const {x,y} = useMounsePositon()
        const { result, loading, loaded} = useURLLoader<catResult[]>('https://api.thecatapi.com/v1/images/search')


        const updateGreeting = () => {
            greetings.value += 'Hello!'
        }
        const modalIsOpen = ref(false)
        const openModal = () => {
            modalIsOpen.value = true
        }
        const onModalClose = () => {
            modalIsOpen.value = false
        }


        watch(result, () => {
            // document.title = 'update' + greetings.value
            if (result.value) {
                console.log('value', result.value[0].url);
                
            }
            
        })

        onRenderTracked((e) => {
            console.log(e);
            
        })

        // onMounted(() => {
        //     console.log('mounted'); 
        // })

        // onUpdated(() => {
        //     console.log('updated');  
            
        // })

        const data: DataProps = reactive ({
            count: 0,
            increase: () => { data.count++},
            double: computed(() =>  data.count * 2 ),
            number: [0,1,2],
            person: {}
        })

        data.number[0] = 3
        data.person.name = 'Michael'
        const refData = toRefs(data)
        return {
            greetings,
            updateGreeting,
            ...refData,
            x,
            y,
            result,
            loading,
            loaded,
            modalIsOpen,
            openModal,
            onModalClose
        }
    }

});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
