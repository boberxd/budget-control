import { createStore } from 'vuex'
import user from './user'
import common from './common'
export const store = createStore({
//   state () {
//     return {
//       count: 1
//     }
//   }
    modules: {
        user,
        common
    }
})
