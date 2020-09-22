import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo:[
    ],
    filtered:[

    ]
  },
  mutations: {
    AddITEM(state,item)
    {
      state.todo.push({
        Title: item,
        status: false,
        selected: false
      })
      state.filtered.push({
        Title: item,
        status: false,
        selected: false
      })
    },
    DELETE_ITEM(state,item)
    {
      let temp=state.todo.indexOf(item);
      state.todo.splice(temp,1);
      temp=state.filtered.indexOf(item);
      state.filtered.splice(temp,1);
    },
    ALL_STATE(state)
    {
      let temp=state.todo;
      temp.forEach(element => {
        element.selected=true;        
      });
    },
    NO_STATE(state)
    {
      let temp=state.todo;
      temp.forEach(element => {
        element.selected=false;        
      });
    },
    SHOW_ALL(state)
    {
      state.filtered.splice(0,state.filtered.length);
      let temp=state.todo;
      temp.forEach(element=>{state.filtered.push(element)});
    },
    SHOW_NOT_DONE(state)
    {
      let temp=state.todo;
      state.filtered.splice(0,state.filtered.length);
      for(let i=0;i<temp.length;i++)
      {
        if(!temp[i].status)
        state.filtered.push(temp[i]);
      }
    },
    SHOW_DONE(state)
    {
      let temp=state.todo;
      state.filtered.splice(0,state.filtered.length);
      for(let i=0;i<temp.length;i++)
      {
        if(temp[i].status)
        state.filtered.push(temp[i]);
      }
    },
    CHANGE_STATUS(state,item)
    {
      let temp=state.todo.indexOf(item);
      state.todo[temp].status=!state.todo[temp].status;
    }
  },
  actions: {
    addTodoItem({commit},item)
    {
      commit("AddITEM",item);
    },
    deleteTodo({commit},item)
    {
      commit("DELETE_ITEM",item);
    },
    allState({commit})
    {
      commit("ALL_STATE");
    },
    noState({commit})
    {
      commit("NO_STATE");
    },
    showAll({commit})
    {
      commit("SHOW_ALL");
    },
    showDone({commit})
    {
      commit("SHOW_DONE");
    },
    showNotDone({commit})
    {
      commit("SHOW_NOT_DONE");
    },
    changeStatus({commit},item)
    {
      commit("CHANGE_STATUS",item);
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
