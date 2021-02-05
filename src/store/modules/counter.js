const state = {
    counter: 0,
    clicks: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.clicks + ' Clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
        state.clicks++;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
        state.clicks++;
    },
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}