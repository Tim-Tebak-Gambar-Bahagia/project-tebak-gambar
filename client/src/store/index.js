import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soal: [
      {
        image: "https://cdn.idntimes.com/content-images/post/20200426/7-5d23b88833fbc1cf02a4f948a55e11b0.jpg",
        answer: "jawab1"
      },
      {
        image: "https://cdn.idntimes.com/content-images/post/20200426/8-eca4f2c39d988593e4549aad7ae9d6e5.jpg",
        answer: "jawab2"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak8.jpg",
        answer: "jawab3"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak11.jpg",
        answer: "jawab4"
      },
      {
        image: "https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-tebak12.jpg",
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
