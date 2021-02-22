<template>
  <div id="app">
    <div class="todo">
    <h1 class="title">Todo List</h1>
      <p style="color: red" v-if="show"> Please enter a todo </p>
     <div class="todo-add">
      <input @keydown="show = false" class="input" type="text" v-model="item.name">
      <button class="add-btn" @click="submitted">Add</button>
    </div>
    <todo-list :todos="todos"></todo-list>
    </div>
  </div>
</template>
<script>
import TodoList from "./components/todos/TodoList.vue"
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  },
  components: {
    TodoList,
    //TodoAdd
  },
  data() {
    return {
      item: {
        name: "",
      },
      show: false
    }
  },
  methods: {
    submitted() {
      if(this.item.name != "") {
        this.$store.dispatch('addTodo', {
          id: Math.floor(Math.random()*100000),
          name: this.item.name,
          completed: false
        }).then(() => {
          this.item.name = ""
          this.show = false
        }).catch(err => console.log(err))
      } else {
        this.show = true
      }
      
      //console.log(this.item)
    },
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  width: 100%;
}
.todo {
  width: 40%;
  background-color: #c1c1c1;
  margin-top: 50px;
  padding: 1rem;
}
.title {
  text-align: center;
}
.todo-add {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.input {
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px transparent;
  font-size: 16px;
}
.add-btn {
  background-color:cornflowerblue;
  color: white;
  padding: .5rem .7rem;
  font-size: 16px;
  border: 0px transparent;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 4px;
}
</style>
