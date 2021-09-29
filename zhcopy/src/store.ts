import { createStore } from "vuex";
import{ testData, testPosts, ColumnProps, PostProps } from './testData'
export { ColumnProps, PostProps } from './testData'
import axios from 'axios'

interface userProps {
    isLoging: boolean;
    name?: string;
    id?: number;
    columnId?: number
}

interface imageProps {
    _id?: string;
    url?: string;
    createAt?: string; 

}

export interface columnProps {
    id:number;
    title:string;
    avatar?:imageProps;
    description:string;
}

export interface goldalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: userProps;
}

const store = createStore<goldalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLoging: true, name: 'Michael', columnId: 1}
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLoging: true, name: 'Michael' }
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        }
    },
    actions: {
        fetchColumns(context) {
            axios.get('/columns').then(resp => {
                context.commit('fetchColumns', resp.data)
            })
        }
    },

    getters: {
        biggerColuLen (state) {
            return state.columns.filter(c => c.id > 2).length
        },
        getColuId: (state) => (id: number) => {
            return state.columns.find(c => c.id === id)
        },
        getPostCid: (state) => (cid: number) => {
            return state.posts.filter(post => post.columnId === cid)
        }
    }
})


export default store