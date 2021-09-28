import { createApp } from 'vue'

import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'


axios.defaults.baseURL = 'https://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
    config.params = {
        ...config.params, icode: '9BFBE31E842410AF'
    }
    return config
})
axios.get('columns').then(resp => {
    console.log(resp.data);
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
