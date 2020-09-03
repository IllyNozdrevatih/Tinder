export const state = () => ({
    cards: 0,
    cardsAvailable: 0,
    cardsLeft: 0,
    refreshed: 0
})
  
export const mutations = {    
    refresh(state){
        state.cardsAvailable = state.cards
        state.cardsLeft = state.cards.length
        state.refreshed += 1
    },
    setCards(state, cards){
        state.cards = Object.assign(cards)
        state.cardsAvailable = Object.assign(cards)
        state.cardsLeft = cards.length
    },
    cardsPop(state){
        state.cardsAvailable = state.cards.slice(0, state.cardsAvailable.length-1)
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const cards = await this.$axios.$get('posts/swiper')
            commit('setCards', cards)
            return true
        } catch (e) {
            console.log(e);
            return false
        }
    }
}

export const getters = {
    cards: s => s.cards,
    cardsAvailable: s => s.cardsAvailable,
    cardsCount: s => s.cards.length,
    cardsLeft: s => s.cardsAvailable.length,    
    refreshed: s => s.refreshed
}