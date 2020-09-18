import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soal: [
      {
        image: "https://1.bp.blogspot.com/-jHtsC_Y4OP0/WEvxYPTv8DI/AAAAAAAAAHk/AVYDu2LiFioDiOkCR22qAu121u88mbfzgCLcB/s1600/tebak-gambar-level-2-soal-nomor-4.jpg",
        answer: "jawab1"
      },
      {
        image: "https://2.bp.blogspot.com/-9WikulDAjm4/WDYa2ElD69I/AAAAAAAAADA/wMQDkaq45DQGEH7awe_D7nPyqjbyNogMACLcB/s1600/tebak-gambar-level-1-soal-nomor-9.jpg",
        answer: "jawab2"
      },
      {
        image: "https://www.sigmbi.org/wp-content/uploads/Kunci-Jawaban-Tebak-Gambar-Level-26-WANITA-SUKA-PADA-LELAKI-YANG-SOPAN.jpg",
        answer: "jawab3"
      },
      {
        image: "https://2.bp.blogspot.com/-qMCYLyeQKps/WDgmPD5hBPI/AAAAAAAAAEA/eLP3w9bqm-AIbkn-JTxq5t3BfFjgEyoIQCLcB/s1600/tebak-gambar-level-1-soal-nomor-13.jpg",
        answer: "jawab4"
      },
      {
        image: "https://1.bp.blogspot.com/-cWC-sJoUGdE/XkF9IBjQZyI/AAAAAAAAA6E/c49nosZyFjUFEWoujJmToxaw5XMtkJhbwCLcBGAsYHQ/s320/22.png",
        answer: "jawab5"
      },
      {
        image: "",
        answer: ""
      }
    ],

    name: "",
    userId: null,
    dataUser: []
  },
  mutations: {
    ADD_USER(state, payload) {
      state.name = payload;
    },
    ADD_ID(state, payload) {
      state.userId = payload
    }
  },
  actions: {
    addPlayer (context, payload) {
       axios({
        method: 'POST',
        url: '/players',
        data: {
          name: payload,
          score: 0
        }
      })
        .then(({ data }) => {    
          console.log(data)
          context.commit("ADD_ID", data.id) 
          return data
        })
        .catch(err => {
          console.log(err)
        })
    },

    editPlayer (context, data) {
      console.log(data, "<< di store")
      axios({
        method: 'PUT',
        url: `/players/${data.id}`,
        data: {
          name: data.name,
          score: data.score
        }
      })
        .then(({ data }) => {
          console.log(data, '<< ini di store')
        })
        .catch(err => {
          console.log(err)
        })
    },

    getAllPlayers(context) {
      axios({
        method: 'GET',
        url: `/players`
      })
        .then(({ data }) => {
          console.log(data, '<< ini di store')
          return data
        })
        .catch(err => {
          console.log(err)
        })
    }




  },
})
