<template>
  <div class="lb-container bordered">
      <div class="lb-card">
          <div style="text-align: right;">
              <span>X</span>
          </div>
          <div class="lb-content bordered">
            <img :src="medal" class="lb-content-img" alt="medal">
            <span class="lb-content-title">Leaderboard</span>
            <ul class="lb-list">
              <li class="lb-list-item">Mario - 5 <a @click.prevent="showModal" class="lb-list-price" href="">Claim Prize</a></li>
              <li class="lb-list-item">Arviandito - 2</li>
              <li class="lb-list-item">Merchika - 2</li>
              <li class="lb-list-item">Fariz Rachimawan - 2</li>
              <li class="lb-list-item">Dion Michael - 2</li>
              <li class="lb-list-item">Anggie Yohana - 2</li>
              <li class="lb-list-item">Grayfield Moningkey - 2</li>
              <li class="lb-list-item">Patrick Sangian - 2</li>
              <li class="lb-list-item">Reyand Simatupang - 2</li>
            </ul>
            <span class="lb-content-text">Indonesia negaraku Hacktiv8 bootcampku!</span>
            <a href="">back to home</a>
          </div>
      </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  name: 'Leaderboard',
  data: () => ({
    medal: 'https://media1.giphy.com/media/cLNVpwFasrCB5jbQVp/giphy.gif'
  }),
  methods: {
    showModal () {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
  }
}
</script>
<style scoped>
.lb-card {
    background-color: white;
    border-radius: 10px;
    padding: 24px 48px;
    -webkit-box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    min-width: 400px;
}
.lb-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5c043;
}
.lb-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.lb-content-img {
    height: 200px;
    margin: 30px 0px;
}
.lb-content-title {
    font-size: 2rem;
    margin-bottom: 10px;
}
.lb-content-subtitle {
    margin-bottom: 10px;
}
.lb-content-text {
    text-align: center;
    color: rgba(0,0,0,0.59);
    font-size: .75rem;
    line-height: 2;
}
.lb-list-item {
  list-style: none;
  font-size: 1.2rem;
}
.lb-list {
  padding: 0;
  line-height: 1.5;
}
.lb-list-price {
  font-size: .8rem;
}
.lb-footer {
    min-width: 400px;
    min-height: 150px;
}
.bordered {
    /* border: 1px solid rgba(0,0,0,.2); */
}
</style>
