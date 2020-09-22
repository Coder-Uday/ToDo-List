<template>
  <div class="hello">
    <h1>Login</h1>
    <h3 >Username</h3>
    <input  v-model="username">
    <h3 >Password</h3>
    <input  v-model="pass" type="password">
    <p></p>
    <button class="button" v-on:click="validate">Submit</button>
  </div>
</template>

<script>
import route from "../router/index.js";
export default {
  name: 'HelloWorld',
  props: {
    username: String,
    pass: String,
  },
  methods: {
    validate()
    {
      route.push("about");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 30px 0 0;
}
h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 30px 0 0;
}
p{
  font-size: 25px;
}
input{
  width: 300px;
  height: 40px;
  transition: 0.5s;
  border-radius: 8px;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
input:hover{
  border-radius: 8px;
  width: 400px;
  height: 50px;
  transition: 0.5s;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.hello{
  background-color:lightgray;
  height: 400px;
}
button{
  border-radius: 12px;
  width: 100px;
  height: 40px;
  background-color: grey;
  font-size: 15px;
  transition: 0.5s;
}
button:hover{
  border-radius: 12px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  background-color:lightslategrey;
}
</style>
