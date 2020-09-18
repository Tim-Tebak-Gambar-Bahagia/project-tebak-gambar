<template>
  <div>
      <li class="list-group-item">{{user.name}} | {{user.score}} </li>
  </div>
</template>

<script>
export default {
    name: "Player",
    props: [ 'user' ]
}
</script>

<style>

</style>