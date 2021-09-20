import { createStore } from "vuex";
import{ testData, testPosts, ColumnProps, PostProps } from './testData'

interface userProps {
    isLoging: boolean;
    name?: string;
    id?: number;
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
        user: { isLoging: false}
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLoging: true, name: 'Michael' }
            }
    },
    getters: {
        biggerColuLen (state) {
            return state.columns.filter(c => c.id > 2).length
        }
    }
})


export default store