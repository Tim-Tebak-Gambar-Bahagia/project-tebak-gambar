import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    dataUser: []
  },
  mutations: {
    GET_USER(state, payload) {
      state.username = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
