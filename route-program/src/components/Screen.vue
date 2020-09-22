<template>
  <div class="filter">
      <button :class="{'all':all}" @click="showAll">All ({{$store.state.todo.length}})</button>
      <button :class="{'done':done}" @click="showDone">Completed ({{$store.state.todo.filter((item)=>item.status).length}})</button>
      <button :class="{'notdone':notdone}" @click="showNotDone">Pending ({{$store.state.todo.filter((item)=>!item.status).length}})</button>
  </div>
</template>

<script>
export default {
    name: "Screen",
    data(){
        return{
            checked: false,
            all: false,
            done: false,
            notdone: false
        }
    },
    methods:{
        checkstate()
        {
            this.checked=!this.checked;
            if(this.checked)
                this.$store.dispatch("allState");
            else
                this.$store.dispatch("noState");
        },
        showAll()
        {
            this.$store.dispatch("showAll");
            this.all=true;
            this.notdone=false;
            this.done=false;
        },
        showDone()
        {
            this.$store.dispatch("showDone");
            this.all=false;
            this.notdone=false;
            this.done=true;
        },
        showNotDone()
        {
            this.$store.dispatch("showNotDone")
            this.all=false;
            this.notdone=true;
            this.done=false;
        }
    },
    created()
    {
        this.showAll();
    },
    updated()
    {
        if(this.all)
        this.showAll();
        else if(this.done)
        this.showDone();
        else if(this.notdone)
        this.showNotDone();
    }
}
</script>

<style scoped>
.all{
    background-color: limegreen;
}
.all:hover{
    background-color: limegreen;
}
.done{
    background-color: limegreen;
}
.done:hover{
background-color: limegreen;
}
.notdone{
    background-color: limegreen;
}
.notdone:hover{
background-color: limegreen;
}
button{
  border-radius: 12px;
  width: 120px;
  height: 40px;
  background-color: lightgray;
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
.filter #myCheck{
    border: black solid thin;
    width: 20px;
    height: 30px;
    border-radius: 12px;
    margin-top: 5px;
}
.filter{
    background-color: grey;
    height: 50px;
    border: thick;
}

</style>