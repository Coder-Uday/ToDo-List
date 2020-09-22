<template>
  <div class="ToDoList" >
      <!-- <h1>Hai Hello</h1> -->
      <ToDo v-for="(doitem,index) in List" :key="index" :item="doitem"></ToDo>
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";
export default {
  name:"ToDoList",
  components:{
    ToDo
  },
  computed:{
      List()
      {
          return this.$store.state.filtered;
      }
  }
}
</script>

<style scoped>
.ToDoList{
  background-color: grey;
}

</style>