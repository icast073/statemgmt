import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.clicks + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter+=payload;
            state.clicks++;
        },
        decrement: (state, payload) => {
            state.counter-=payload;
            state.clicks++;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        // increment: context =>  {
        //     context.commit('increment');
        // },
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment',payload.by);
            }, payload.duration);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        },
        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
        }
    }
});