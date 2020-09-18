<template>
<div>
    <form @submit.prevent="setName">
      <div class="form-group">
        <label for="chat">Name</label>
        <input v-model="name" type="text" class="form-control" />
      </div>
    </form>

    <form @submit.prevent="sendMessage">
      <div class="form-group">
        <label for="chat">Chat</label>
        <input v-model="inputMessage" type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>

    <div v-for="(obj, i) in allMessages" :key="i">
      <p>{{obj.sender}} - {{obj.message}}</p>
    </div><br><br>

    <div>
      {{$store.state.soal[indexSoal].image}}
      <form @submit.prevent="sendAnswer">
        <div class="form-group">
          <label for="chat">Answer</label>
          <input v-model="inputAnswer" type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit Answer</button>
      </form>
    </div>
    {{done}}
    {{lose}}
    <br>
    {{allUsers}}
</div>
</template>

<script>
export default {
  name: "Test",
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
