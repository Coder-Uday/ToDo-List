<template>
  <div  class="ToDo" @click="changeStatus()">
      <h3 :class="{'strike': item.status}">{{ item.Title}}</h3>
    <div class="remove" @click="deleteTodo">
      &times;
    </div>
  </div>
</template>

<script>
export default {
    name : "ToDo",
    props:['item'],
    data(){
      return{
        nested:false
      }
    },
    methods:{
      deleteTodo(){
        this.$store.dispatch("deleteTodo",this.item);
        this.nested=true;
      },
      changeStatus()
      {
        if(this.nested)
        {
          this.nested=false;
          return
        }
        this.$store.dispatch("changeStatus",this.item);
      }
    }
        
}
</script>

<style scoped>
.strike{
  text-decoration: line-through;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: black;
  font-weight: bold;
}
.strike{
  text-decoration: line-through;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: white;
  font-weight: bold;
}
.ToDo h3{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: black;
}
.ToDo{

  width: 500px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 10px auto 0px auto;
  transition: 0.5s;
}
.ToDo:hover{
  width: 500px;
  background-color: rgb(102, 99, 99);
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin: 10px auto 0px auto;
  transition: 0.5s;
}
.remove{
  cursor: pointer;
  font-size: 30px;
  margin-top: 10px;
}
.remove:hover{
  color: red;
}
</style>