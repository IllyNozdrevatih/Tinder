export const state = () => ({
    super: 0,
    like: 0,
    nope: 0,
})
  
export const mutations = {
    addParam(state, name) {
        state[name]++
    },
    refresh(state){
        state.super = 0
        state.like = 0
        state.nope = 0
    }
}

export const actions = {
    async fetch({commit}) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        // console.log('users', users);
        commit('setUsers', users)
    }
}

export const getters = {
    super: s => s.super,
    like: s => s.like,
    nope: s => s.nope
}