import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from './views/home.vue'
import login from './views/login.vue'
import columnDetail from './views/columnDetail.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter ({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/cd/:id',
            name: 'cd',
            component: columnDetail
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
