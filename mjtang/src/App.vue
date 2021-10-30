
<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view/> -->

    <ul v-for="i in result" :key="i">
        <li>
            <div>{{i.title}}</div>
            <div>{{i.body}}</div> 
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import get from './hooks/get'


export default defineComponent({

    setup() {
        const { result } = get('http://127.0.0.1:8000/api/')
        // const rawData = await axios.get('http://127.0.0.1:8000/api/')

        return {
            result,
        }
    },
})
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
