<template>
    <div class="AddNewItem">
        <input @keyup.enter="addNewItem" v-model="newitem" placeholder="Give me something to Note?!!!">
    </div>
</template>

<script>
export default {
    name:"NewToDo",  
    data(){
        return {
            newitem: ""
        }
    },
    methods:{
        addNewItem(){
            this.$store.dispatch("addTodoItem",this.newitem);
            this.newitem="";
        }
    }
};
</script>
<style scoped>
.AddNewItem{
    width: 800px;
    height: 50px;
    margin: 20px auto;
    transition: 0.5s;
}
input{
    border-radius: 8px;
    width: 400px;
    height: 40px;
    background-color: lightgray;
    transition: 0.5s;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
input:hover{
    border-radius: 8px;
    width: 500px;
    transition: 0.5s;
}
button{
    width: 130px;
    height: 50px;
    transition: 0.5s;
    border-radius: 12px;
    font-size: 15px;
    font-family: Georgia, 'Times New Roman', Times, serif   ;
}
button:hover{
    font-size: 15px;
    border-radius: 12px;
    width: 150px;
    transition: 0.5s;
    color: black;
    background-color: rgb(102, 99, 99);
    font-family: Georgia, 'Times New Roman', Times, serif   ;   
}
</style>