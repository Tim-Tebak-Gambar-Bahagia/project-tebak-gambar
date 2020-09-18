<template>
    <div id="gamePage">
        <div class="page-left">
            <h1>whAtS oN yoUr scReeN</h1>
            <div class="card mt-7" style="width: 45rem;">
                <ul class="list-group list-group-flush">
                    <Player v-for="(user, i) in allUsers" :key="i" :user="user"></Player>
                </ul>
            </div>
        </div>
        <div class="page-right">
            <div class="card bg-dark text-white">
                 <img :src="$store.state.soal[indexSoal].image" class="card-img" alt="">
                <div class="card-img-overlay">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 rounded">
                    <div class="card">
                        <h3>Jawaban</h3>
                        <div class="card-body">
                            <form @submit.prevent="sendAnswer">
                                <input class="rounded" v-model="inputAnswer" type="text">
                                <button type="submit" class="btn btn-primary">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 rounded">
                    <div class="card">
                        <h3>Obrolan</h3>
                        <div class="card-body">
                          <div class="card-messages">
                            <div  v-for="(obj, i) in allMessages" :key="i">
                                <p>{{obj.sender}} - {{obj.message}}</p>
                            </div><br><br>
                          </div>
                            <form @submit.prevent="sendMessage">
                                <input class="rounded" v-model="inputMessage" type="text">
                                <button href="#" class="btn btn-primary">send</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>


<script>
import Player from '../components/Player.vue'
export default {
    name: "Game",
    components: {
        Player
    },
    data() {
    return {
      name: this.$store.state.name,
      score: 0,
      inputMessage: "",
      allMessages: [],
      indexSoal: 0,
      inputAnswer: '',
      done: '',
      lose: '',
      allUsers: []
    };
  },
  methods: {
    sendMessage() {
      let payload = {
        sender: this.name,
        message: this.inputMessage,
      };

      this.allMessages.push(payload);

      this.$socket.emit("newMessage", payload);
      this.inputMessage = "";
    },
    sendAnswer() {
      if(this.inputAnswer == this.$store.state.soal[this.indexSoal].answer) {
        this.indexSoal += 1
        this.inputAnswer = ''

        this.score += 100

        let userData = {
          id: this.$store.state.userId,
          name: this.name,
          score: this.score
        }

        this.$store.dispatch('editPlayer', userData)
        .then((response)=> {
          console.log(response)
        })
        
        //Kirim ke yang lain
        this.$socket.emit("updateLeaderboards", userData);

        //Olah nilai sendiri
        // this.allUsers.push(userData)

        this.allUsers.forEach(element => {
          if(element.id == userData.id) {
            element.score = userData.score
          }
        });


        
        if (this.indexSoal == 5) {
          this.done = 'Congratulations!!'
          let payload = 'You Lose :('
          this.$socket.emit("loseMessage", payload);
          this.$router.push('/leaderboard')
        }
      }
      
    }
  },
  computed: {
    
  },
  created() {
    let userData = {
      id: this.$store.state.userId,
      name: this.name,
      score: this.score
    }

    this.$socket.emit("updateLeaderboards", userData);
    this.allUsers.push(userData)
  },
  sockets: {
    init(payload) {
      console.log(payload, "<<< dari server!");
    },
    sendMessageToOther(payload) {
      console.log(payload, "<<ini dari broadcast client");
      this.allMessages.push(payload);
    },
    sendLoseToOther(payload) {
      console.log(payload, "<< asli masuk ini")
      this.lose = payload
      this.$router.push('/leaderboard')
    },
    sendLeaderboardsToOther(payload) {
       console.log(payload, "<< asli masuk ini")
       let userData = {
          id: payload.id,
          name: payload.name,
          score: payload.score
        }

       let flag = true
        this.allUsers.forEach(element => {
          if(element.id == userData.id) {
            element.score = userData.score
            flag = false
          }
        });
        if(flag) {
          this.allUsers.push(payload)
        }
    }
  },
};
</script>

<style>
</style>
