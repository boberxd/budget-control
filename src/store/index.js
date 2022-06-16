import { createStore } from 'vuex'
import user from './user'
import common from './common'
import task from './task'

export const store = createStore({
    modules: {
        user,
        common,
        task
    }
})
