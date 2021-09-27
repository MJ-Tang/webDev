import { createRouter, createWebHistory } from 'vue-router'
import  store  from './store'
import home from './views/home.vue'
import login from './views/login.vue'
import columnDetail from './views/columnDetail.vue'
import createPost from './views/createPost.vue'
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
            component: login,
            meta: {
                redirectAlreadeLogin: true
            }
        },
        {
            path: '/cd/:id',
            name: 'cd',
            component: columnDetail
        },
        {
            path: '/create',
            name: 'create',
            component: createPost,
            meta: {
                requiredLogin: true
            }
        }
    ]
})

router.beforeEach((to, from, next ) => {
    if (to.meta.requiredLogin && !store.state.user.isLoging) {
        next({
            name: 'login'
        })
    }else if(to.meta.redirectAlreadeLogin && store.state.user.isLoging) {
        next('/')
    } else {
        next()
    }
    
})

export default router