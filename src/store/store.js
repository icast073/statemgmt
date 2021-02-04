import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.clicks + ' Clicks';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
            state.clicks++;
        },
        decrement: state => {
            state.counter--;
            state.clicks++;
        }
    }
});