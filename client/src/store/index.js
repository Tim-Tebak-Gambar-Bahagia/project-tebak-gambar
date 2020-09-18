import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soal: [
      {
        image: "https://cdn.idntimes.com/content-images/post/20200426/7-5d23b88833fbc1cf02a4f948a55e11b0.jpg",
        answer: "ruben onsu"
      },
      {
        image: "https://cdn.idntimes.com/content-images/post/20200426/8-eca4f2c39d988593e4549aad7ae9d6e5.jpg",
        answer: "jeremy teti"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak8.jpg",
        answer: "mantab jiwa"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak11.jpg",
        answer: "surat edaran asli penangkapan pejabat nakal"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak12.jpg",
        answer: "kadar ketampanan wajah otomatis naik ketika beribadah"
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
    },
    SET_USER(state, payload) {
      state.dataUser = payload
    }
  },
  actions: {
    addPlayer (context, payload) {
       return axios({
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

    getAllPlayers({commit}) {
      axios({
        method: 'GET',
        url: `/players`
      })
        .then(({ data }) => {
          commit('SET_USER', data)
          console.log(data, '<< ini di store')
          return data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteAllPlayers({commit, dispatch}) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: `/players`
        })
          .then(({ data }) => {
            commit('SET_DELETE_USER', data)
            console.log(data, '<< delete all players')
            localStorage.clear()
            dispatch('getAllPlayers')
            router.push('/')
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }

  },
})
