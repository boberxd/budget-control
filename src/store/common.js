export default {
    state: {
      loading: false,
      errors: null
    },
    mutations: {
      setLoading (state, payload) {
        state.loading = payload
      },
      setErrors (state, payload) {
        state.errors = payload
      },
      clearErrors (state) {
        state.errors = null
      }
    },
    actions: {
      setLoading({commit}, payload) {
        commit('setLoading', payload)
      },
      setError({commit}, payload) {
        commit('setError', payload)
      },
      clearError({commit}) {
        commit('clearError')
      },
    },
    getters: {
      loading (state) {
        return state.loading
      },
      errors (state) {
        return state.errors
      }
    }
}