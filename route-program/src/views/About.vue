<template>
  <div class="about">
    <NewToDo />
    <ToDoList />
    <Screen />
  </div>
</template>

<script>
import ToDoList from "../components/ToDoList.vue";
import NewToDo from "../components/NewToDo.vue";
import Screen from "../components/Screen";
export default {
  name:"About",
  components:{
    ToDoList,
    NewToDo,
    Screen
  }
}
</script>

<style scoped>
.about{
  background: grey;
}
</style>